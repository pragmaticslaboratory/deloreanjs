const { heapSnapshot } = require('./heap');

module.exports = {
    insertTimepoint: (id) => {
        heapSnapshot(id);
    },

    watch: (array) => {
        console.log('Debugging [' + array + ']');
    },

    insertBreakpoint: (id) => {
        heapSnapshot(id);
        throw "Execution paused.";
    }
}