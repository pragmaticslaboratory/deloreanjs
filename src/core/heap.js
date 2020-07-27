global.heap = {};
global.heap.snapshots = [];
global.tempValueStore = {};

module.exports = {
  addDependencies: (dependencies) => {
    global.heap.dependencies = dependencies;
  },

  heapSnapshot: (id, loc) => {
    const snapshot = {
      timeLineId: global.timeLine,
      timePointId: '',
      timePointTimestamp: Date.now() - global.startTime + global.acumTime,
      timePointLoc: loc,
    };

    let originId = id;
    let counter = 0;
    let startFromNumber = global.startFrom;
    let i = 0;

    while (isNaN(parseInt(startFromNumber))) {
      startFromNumber = global.startFrom.slice(i);
      if (i > global.startFrom.length) break;
      ++i;
    }
    if (i <= global.startFrom.length) {
      let startFromName = global.startFrom.slice(0, i - 1);
      if (id == startFromName) {
        counter = parseInt(startFromNumber);
        id = id + ++counter;
      }
    }

    let oldTimePoint;
    while (global.heap.snapshots.find((element) => element.timePointId == id)) {
      oldTimePoint = global.heap.snapshots.findIndex(
        (element) => element.timePointId == id && element.timeLineId != global.timeLine,
      );
      if (oldTimePoint != -1) global.heap.snapshots.splice(oldTimePoint, 1);
      else id = originId + ++counter;
    }

    snapshot.timePointId = id;
    global.heap.dependencies.map((dependecy) => {
      try {
        snapshot[`${dependecy.name}`] = global.tempValueStore[`${dependecy.name}`];
      } catch (e) {}
    });
    global.heap.snapshots.push(snapshot);
  },
};
