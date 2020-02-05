global.heap = {}
heap.snapshots = []
global.tempValueStore = {}

module.exports = {

    addDependencies: (dependencies) => {
        heap.dependencies = dependencies;
    },

    heapSnapshot: (id, loc) => {
        const snapshot = {
            timeLineId: global.timeLine,
            timePointId: '',
            timePointTimestamp: Date.now() - startTime + acumTime,
            timePointLoc: loc
        }

        let originId = id;
        let counter = 0;
        let startFromNumber = global.startFrom;
        let i = 0;

        while(isNaN(parseInt(startFromNumber))){
            startFromNumber = global.startFrom.slice(i); 
            if (i > global.startFrom.length) break;
            ++i;
        }
        if(i <= global.startFrom.length){
            let startFromName = global.startFrom.slice(0, i-1);
            if(id == startFromName) {
                counter = parseInt(startFromNumber); 
                id = id + (++counter);  
            } 
        }
        
        let oldTimePoint;
        while(heap.snapshots.find(element => element.timePointId == id)){
            oldTimePoint = heap.snapshots.findIndex(element => (element.timePointId == id && element.timeLineId != global.timeLine))
            if(oldTimePoint != -1) heap.snapshots.splice(oldTimePoint, 1);
            else id = originId + (++counter);
        }

        snapshot.timePointId = id;
        heap.dependencies.map(dependecy => {
            try{
                snapshot[`${dependecy.name}`] = tempValueStore[`${dependecy.name}`];
            }catch(e){}
        })
        heap.snapshots.push(snapshot)
    },
}