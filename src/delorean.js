const { heapSnapshot } = require('./heap');

module.exports = {
    insertTimepoint: (id) => {
        heapSnapshot(id);
    },

    watch: (array) => {
        console.log('Debugging [' + array + ']');
    }
}