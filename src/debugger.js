const babel = require('babel-core');
global.timeLine = 0;
global.startFrom = '';
global.fromTheFuture = false;

const {
  dependenciesVisitor,
  initConfigVisitor,
  storeContinuationsVisitor,
  tryCatchVisitor,
  ifBlockVisitor,
  heapRestoreVisitor
} = require("../src/staticAnalysis");
var cloneDeep = require('lodash.clonedeep');

/*function restoreHeap(restore){
  let snapshot;
  heap.snapshots.map(element => {
    if(element.timePointId == restore) snapshot = element;
  })
  dependencies.map((key) => {
    eval(`${key.name} = document.getElementById('input-${key.name}').value || undefined || snapshot.${key.name};`)
  })
}*/

function ldDeepCopy(original){
  return cloneDeep(original);
}

module.exports = {
  init: (inputCode, ) => {
    let src = require("../index")(inputCode, [
      dependenciesVisitor,
      tryCatchVisitor,
    ], true).code;
  
    let { code } = babel.transform(src, {
      plugins: [ifBlockVisitor, initConfigVisitor, heapRestoreVisitor,
      storeContinuationsVisitor]
    })

    code = `
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
    } try{` + code + `} 
    catch(e){
      emptyContinuation = createContinuation();
      if(emptyContinuationAux) {                
        emptyContinuation = emptyContinuationAux;
      }
      console.log(e)
    }
    `;



    let compile = require("../unwinder/bin/compile.js")
    let unwindedCode = compile(code);
    

    try {
      console.log(`%cStart first execution`, "background: #222; color: cyan");
      eval(unwindedCode);
      console.log(`%cFinish first execution`, "background: #222; color: cyan");
    } catch (e) {
      console.log(e, "Error from VM");
    }
  },

  invokeContinuation: (kont) => {
    //restoreHeap(kont)
    fromTheFuture = true
    try {
      global.startFrom = kont;
      console.log(`%cStart TimePoint ${kont}`,"background: #222; color: #bada55");
      heap.snapshots.find(element => element.timePointId == kont).timeLineId = ++global.timeLine;
      eval(
        `let kontAux = continuations.kont${kont}; 
        contTimeLine.kont${kont} = global.timeLine;       
        continuations.kont${kont}(); 
        continuations.kont${kont} = kontAux`
      );
      console.log(`%cEnd TimePoint ${kont}`,"background: #222; color: #bada55");
    } catch (e) {
      console.log(e, "Error from VM");
    }
  }
}