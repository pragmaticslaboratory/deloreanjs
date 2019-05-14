global.heap = {}
heap.snapshots = []

module.exports = {

    addDependencies: (dependencies) => {
        heap.dependencies = dependencies;
    },

    heapSnapshot: (id) => {
        const snapshot = {}
        let counter = 0;
        let originId = id;
        while(heap.snapshots.find(element => {
            return element.TimePointId == id;
        })){
            id = originId + (++counter);
        }
        snapshot.TimePointId = id;
        heap.dependencies.map(dependecy => {
            snapshot[`${dependecy.name}`] = global[dependecy.name.toString()]
        })
        heap.snapshots.push(snapshot)
    },
} 