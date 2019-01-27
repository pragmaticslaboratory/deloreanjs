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
        fs.writeFileSync('heap.json', '{"snapshots": [],"dependencies": []}');
    },

    addDependecies: (dependencies) => {
        heap.dependencies = dependencies;
        fs.writeFile('../heap.json', JSON.stringify(heap), (err) => {
            if(err) throw err;

            console.log("Update heap.json");
        })
    },

    snapshot: () => {
        const heapFile = require('../heap')
        const snapshot = {}
        heapFile.dependencies.map(dependecy => {
            snapshot[`${dependecy}`] = global[dependecy.toString()]
        })

        heapFile.snapshots.push(snapshot)
        heap = heapFile;
    },
    storeSnapshot: () => {
        fs.writeFile('heap.json', JSON.stringify(heap), (err) => {
            if(err) throw err;
            console.log("Add Snapshot");
        })
    }
} 