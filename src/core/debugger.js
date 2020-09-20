const { prepareCode } = require('./static-analysis');
/* necessary for eval(code) */
const { vm } = require('unwinder-engine');
const cloneDeep = require('lodash.clonedeep');

function ldDeepCopy(original) {
  return cloneDeep(original);
}
/* necessary for eval(code) */

global.timeLine = 0;
global.startFrom = '';
global.fromTheFuture = false;
global.implicitCounter;
global.startTime;
global.initTime;
global.endTime;
global.acumTime;
global.implicitTimepoints = false;

module.exports = {
  init: (input) => {
    global.implicitCounter = 0;

    let code = prepareCode(input);

    try {
      console.log(`%cStart first execution`, 'background: #222; color: cyan');
      global.acumTime = 0;
      global.startTime = Date.now();
      eval(code);
      global.endTime = Date.now();
      console.log(`%cFinish first execution`, 'background: #222; color: cyan');
    } catch (e) {
      console.error(e, 'Error from VM');
    }
  },
  invokeContinuation: (kont) => {
    fromTheFuture = true;
    try {
      global.startFrom = kont;
      global.heap.snapshots.find(
        (element) => element.timePointId == kont,
      ).timeLineId = ++global.timeLine;
      global.acumTime += global.heap.snapshots.find(
        (element) => element.timePointId == kont,
      ).timePointTimestamp;

      console.log(`%cStart TimePoint ${kont}`, 'background: #222; color: #bada55');
      global.startTime = Date.now();
      eval(
        `let kontAux = continuations.kont${kont}; 
        contTimeLine.kont${kont} = global.timeLine;       
        continuations.kont${kont}(); 
        continuations.kont${kont} = kontAux`,
      );
      global.endTime = Date.now();
      console.log(`%cEnd TimePoint ${kont}`, 'background: #222; color: #bada55');
    } catch (e) {
      console.error(e, 'Error from VM');
    }
  },
  getEndTimes: () => global.endTime - global.startTime,
};
