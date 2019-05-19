global.heap = {}
heap.snapshots = []

module.exports = {

    addDependencies: (dependencies) => {
        heap.dependencies = dependencies;
    },

    heapSnapshot: (id) => {
        const snapshot = {
            flag: false,
            loop: false,
            timePointId: ''
        }
        let counter = 0;
        let originId = id;

        while(heap.snapshots.find(element => element.timePointId == id)){
            if(!snapshot.loop) {
                snapshot.loop = true;
            }
            id = originId + (++counter);
        }
        snapshot.timePointId = id;
        

        if(!snapshot.flag){
            snapshot.flag = true
            heap.dependencies.map(dependecy => {
                snapshot[`${dependecy.name}`] = global[dependecy.name.toString()]
            })
            heap.snapshots.push(snapshot)
        }
    },
}