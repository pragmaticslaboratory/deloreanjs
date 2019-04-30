const { heapSnapshot } = require('./heap');
const { storeContinuation, resumeContinuation } = require('./continuations');


module.exports = {
    insertTimePoint: (id) => {
        heapSnapshot(id);
    },

    resumeSnapshot: (index) => {
        resumeContinuation(index);
    }
}