const fs = require('fs')
const heapFile = require('../heap')

const heap = {}
heap.snapshots = []

module.exports = {
    createHeapFile: () => {
        // todo
    },

    cleanHeapFile: () => {
        // todo
    },

    addDependecies: (dependencies) => {
        heap.dependencies = dependencies;
        fs.writeFile('../heap.json', JSON.stringify(heap), (err) => {
            if(err) throw err;

            console.log("Update heap.json");
        })
    },

    snapshot: () => {
        const snapshot = {}
        heapFile.dependencies.map(dependecy => {
            snapshot[`${dependecy}`] = global[dependecy.toString()]
        })

        heapFile.snapshots.push(snapshot)
        
        fs.writeFile('../heap.json', JSON.stringify(heapFile), (err) => {
            if(err) throw err;

            console.log("Add Snapshot");
        })
    }
} 