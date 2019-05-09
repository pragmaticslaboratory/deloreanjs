global.heap = {}
heap.snapshots = []

module.exports = {

    addDependencies: (dependencies) => {
        heap.dependencies = dependencies;
    },

    heapSnapshot: (id) => {
        const snapshot = {}
        heap.dependencies.map(dependecy => {
            snapshot[`${dependecy}`] = global[dependecy.toString()]
        })
        
        heap.snapshots.push(snapshot)
    },
} 