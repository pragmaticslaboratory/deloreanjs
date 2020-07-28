const babel = require('babel-core');
const { compile, vm } = require('unwinder-engine');

global.timeLine = 0;
global.startFrom = '';
global.fromTheFuture = false;
global.implicitCounter;
global.startTime;
global.acumTime;
global.implicitTimpeoints = false;

const {
  dependenciesVisitor,
  initConfigVisitor,
  storeContinuationsVisitor,
  tryCatchVisitor,
  ifBlockVisitor,
  heapRestoreVisitor,
  throwBreakVisitor,
  implicitTPVisitor,
  locVisitor,
} = require('./static-analysis');

var cloneDeep = require('lodash.clonedeep');

function ldDeepCopy(original) {
  return cloneDeep(original);
}

module.exports = {
  vm,
  init: (input) => {
    implicitCounter = 0;

    let visitorsConfig = [locVisitor, dependenciesVisitor];
    if (implicitTimpeoints) visitorsConfig.push(implicitTPVisitor);
    visitorsConfig.push(tryCatchVisitor);

    let src = babel.transform(input.toString(), {
      plugins: visitorsConfig,
    });

    let { code } = babel.transform(src.code, {
      plugins: [
        ifBlockVisitor,
        initConfigVisitor,
        heapRestoreVisitor,
        throwBreakVisitor,
        storeContinuationsVisitor,
      ],
    });

    code =
      `
    function updateProp(parentName, obj){
      Object.keys(obj).map(function(key){
        if (typeof obj[key] != 'object'){
          if(document.getElementById('input-' + parentName + '-' + key) && document.getElementById('input-' + parentName + '-' + key).value != '') {
            var updatedValue = document.getElementById('input-' + parentName + '-' + key).value;
            if(!isNaN(updatedValue)) updatedValue = parseInt(updatedValue, 10);
            obj[key] = updatedValue;
          }
        }
        else{
          obj[key] = updateProp(parentName + '-' + key, obj[key]);
        }
      });
      return obj;
    }
    function restoreHeap(restore){
      let snapshot;
      heap.snapshots.map(element => {
        if(element.timePointId == restore) snapshot = element;
      })
      return snapshot;
    }
    emptyContinuation = '';
    emptyContinuationAux = '';
    contTimeLine = {};
    function addCont(cont, continuations, originalId){

      let counter = 0;
      let id = originalId;
      let startFromNumber = global.startFrom;

      let i = 0;
      while(isNaN(parseInt(startFromNumber))){
          startFromNumber = global.startFrom.slice(i); 
          if (i > global.startFrom.length) break;
          ++i;
      }

      if(i <= global.startFrom.length){
          let startFromName = global.startFrom.slice(0, i-1);
          if( id == 'kont' + startFromName) {
            counter = parseInt(startFromNumber); 
            id = id + (++counter);  
          } 
      }

      while(continuations[id] && (contTimeLine[id] == global.timeLine)){
        id = originalId + (++counter);
      }
      continuations[id] = cont;
      contTimeLine[id] = global.timeLine;
    } try{` +
      code +
      `} 
    catch(e){
      emptyContinuation = createContinuation();
      if(emptyContinuationAux) {                
        emptyContinuation = emptyContinuationAux;
      }
      console.log(e)
    }
    `;

    let unwindedCode = compile(code);

    try {
      console.log(`%cStart first execution`, 'background: #222; color: cyan');
      acumTime = 0;
      startTime = Date.now();
      eval(unwindedCode);
      console.log(`%cFinish first execution`, 'background: #222; color: cyan');
    } catch (e) {
      console.error(e, 'Error from VM');
    }
  },

  invokeContinuation: (kont) => {
    fromTheFuture = true;
    try {
      global.startFrom = kont;
      console.log(`%cStart TimePoint ${kont}`, 'background: #222; color: #bada55');
      heap.snapshots.find((element) => element.timePointId == kont).timeLineId = ++global.timeLine;
      acumTime += heap.snapshots.find((element) => element.timePointId == kont).timePointTimestamp;
      startTime = Date.now();
      eval(
        `let kontAux = continuations.kont${kont}; 
        contTimeLine.kont${kont} = global.timeLine;       
        continuations.kont${kont}(); 
        continuations.kont${kont} = kontAux`,
      );
      console.log(`%cEnd TimePoint ${kont}`, 'background: #222; color: #bada55');
    } catch (e) {
      console.error(e, 'Error from VM');
    }
  },
};
