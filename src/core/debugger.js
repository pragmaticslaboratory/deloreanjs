import { prepareCode } from './static-analysis';
import Heap from './heap';

/* necessary for eval(code) */
var { vm } = require('unwinder-engine');
import cloneDeep from 'lodash.clonedeep';
/* necessary for eval(code) */

function Debugger() {
  this.timeLine = 0;
  this.startFrom = '';
  this.fromTheFuture = false;
  this.implicitCounter = 0;
  this.startTime = 0;
  this.acumTime = 0;
  this.implicitTimepoints = false;
  this.heap = new Heap(this);
}

Debugger.prototype.init = function (input) {
  this.implicitCounter = 0;
  let code = prepareCode(input);

  try {
    this.acumTime = 0;
    this.startTime = Date.now();
    console.log(`%cStart first execution`, 'background: #222; color: cyan');
    eval(code);
    console.log(`%cFinish first execution`, 'background: #222; color: cyan');
  } catch (e) {
    console.error(e, 'Error from VM');
  }
};

Debugger.prototype.invokeContinuation = function (kont) {
  this.fromTheFuture = true;

  try {
    this.startFrom = kont;
    global.heap.snapshots.find((element) => element.timePointId == kont).timeLineId = ++this
      .timeLine;
    this.acumTime += global.heap.snapshots.find(
      (element) => element.timePointId == kont,
    ).timePointTimestamp;

    this.startTime = Date.now();

    console.log(`%cStart TimePoint ${kont}`, 'background: #222; color: #bada55');
    let resumeContinuationCode = this.getResumeContinuationCode(kont);
    eval(resumeContinuationCode);
    console.log(`%cEnd TimePoint ${kont}`, 'background: #222; color: #bada55');
  } catch (e) {
    console.error(e, 'Error from VM');
  }
};

Debugger.prototype.getResumeContinuationCode = function (kont) {
  return `let kontAux = continuations.kont${kont}; 
  contTimeLine.kont${kont} = global.timeLine;       
  continuations.kont${kont}(); 
  continuations.kont${kont} = kontAux`;
};

export default Debugger;
