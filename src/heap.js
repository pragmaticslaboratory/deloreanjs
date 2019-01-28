const fs = require('fs')


let heap = {}
heap.snapshots = []

module.exports = {
    createHeapFile: () => {
        fs.appendFile('heap.json', '', function (err) {
            if (err) throw err;
        });
    },

    cleanHeapFile: () => {
        fs.writeFileSync('heap.json', '');
    },

    addDependecies: (dependencies) => {
        heap.dependencies = dependencies;
    },

    snapshot: () => {
        const snapshot = {}
        heap.dependencies.map(dependecy => {
            snapshot[`${dependecy}`] = global[dependecy.toString()]
        })

        heap.snapshots.push(snapshot)
    },
    storeHeapFile: () => {
        fs.writeFileSync('heap.json', JSON.stringify(heap))
    }
} 