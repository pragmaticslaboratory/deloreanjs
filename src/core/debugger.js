const { prepareCode } = require('./static-analysis');
/* necessary for eval(code) */
const { vm } = require('unwinder-engine');
const cloneDeep = require('lodash.clonedeep');

function ldDeepCopy(original) {
  return cloneDeep(original);
}
/* necessary for eval(code) */

global.timeLine = 0;
global.contTimeLine = {};
global.startFrom = '';
global.fromTheFuture = false;
global.implicitCounter = 0;
global.startTime = Date.now();
global.initTime = Date.now();
global.endTime = Date.now();
global.acumTime = 0;
global.implicitTimepoints = false;
//Adds try-catch blocks before and after every timepont.
global.isTimePoint = function (element) {
  return (
    element &&
    element.expression &&
    element.expression.callee &&
    element.expression.callee.object &&
    element.expression.callee.property &&
    element.expression.callee.object.name == 'delorean' &&
    (element.expression.callee.property.name == 'insertTimepoint' ||
      element.expression.callee.property.name == 'insertBreakpoint')
  );
};

function showTime() {
  console.log({
    initTime: global.initTime,
    startTime: global.startTime,
    endTime: global.endTime,
    acumTime: global.acumTime,
    'startTime-endTime': global.endTime - global.startTime,
  });
}

const init = (input) => {
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
}

const invokeContinuation = (kont) => {
  global.fromTheFuture = true;
  try {
    global.startFrom = kont;
    global.heap.snapshots.find(
      (element) => element.timePointId == kont,
    ).timeLineId = ++global.timeLine;
    global.acumTime = global.heap.snapshots.find(
      (element) => element.timePointId == kont,
    ).timePointTimestamp;

    console.log(`%cStart TimePoint ${kont}`, 'background: #222; color: #bada55');
    global.startTime = Date.now();
    eval(
      `let kontAux = continuations.kont${kont}; 
      global.contTimeLine.kont${kont} = global.timeLine;
      continuations.kont${kont}();
      continuations.kont${kont} = kontAux`
    );
    global.endTime = Date.now();
    console.log(`%cEnd TimePoint ${kont}`, 'background: #222; color: #bada55');
  } catch (e) {
    console.error(e, 'Error from VM');
  }
}

const getEndTimes = () => global.endTime - global.startTime;

export {
  init,
  invokeContinuation,
  getEndTimes,
};
