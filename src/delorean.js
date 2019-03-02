const { heapSnapshot } = require('./heap');
const { storeContinuation, resumeContinuation } = require('./continuations');

module.exports = {
    snapshot: () => {
        heapSnapshot();
    },

    resumeSnapshot: (index) => {
        resumeContinuation(index);
    }
}