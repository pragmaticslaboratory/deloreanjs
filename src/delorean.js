const { heapSnapshot } = require('./heap');

module.exports = {
    insertTimePoint: (id) => {
        heapSnapshot(id);
    },

    watch: (array) => {
        console.log('Debugging [' + array + ']');
    }
}