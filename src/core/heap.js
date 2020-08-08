function Heap(_debugger) {
  this.dependencies = [];
  this.snapshots = [];
  this.tempValueStore = {};
  this._debugger = _debugger;
}

Heap.prototype.addDependency = function (dependency) {
  this.dependencies.push(dependency);
};

Heap.prototype.heapSnapshot = function (id, loc) {
  let snapshot = {
    timeLineId: this._debugger.timeLine,
    timePointId: '',
    timePointTimestamp: Date.now() - this._debugger.startTime + this._debugger.acumTime,
    timePointLoc: loc,
  };

  let originId = id;
  let counter = 0;
  let startFromNumber = this._debugger.startFrom;
  let i = 0;

  while (isNaN(parseInt(startFromNumber))) {
    startFromNumber = this._debugger.startFrom.slice(i);
    if (i > this._debugger.startFrom.length) break;
    ++i;
  }

  if (i <= this._debugger.startFrom.length) {
    let startFromName = this._debugger.startFrom.slice(0, i - 1);
    if (id == startFromName) {
      counter = parseInt(startFromNumber);
      id = id + ++counter;
    }
  }

  let oldTimePoint;
  while (this.heap.snapshots.find((element) => element.timePointId == id)) {
    oldTimePoint = this.heap.snapshots.findIndex(
      (element) => element.timePointId == id && element.timeLineId != this._debugger.timeLine,
    );
    if (oldTimePoint != -1) this.heap.snapshots.splice(oldTimePoint, 1);
    else id = originId + ++counter;
  }

  snapshot.timePointId = id;
  this.heap.dependencies.map((dependecy) => {
    try {
      snapshot[`${dependecy.name}`] = tempValueStore[`${dependecy.name}`];
    } catch (e) {
      throw e;
    }
  });
  this.heap.snapshots.push(snapshot);
};

export default Heap;
