const { heapSnapshot } = require('./heap');

module.exports = {
    insertTimePoint: (id) => {
        heapSnapshot(id);
    },
}