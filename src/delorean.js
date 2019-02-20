const { heapSnapshot } = require('./heap');
const { storeContinuation, resumeContinuation } = require('./continuations_output')

module.exports = {
    snapshot: () => {
        heapSnapshot();
    },

    resumeSnapshot: (index) => {
        resumeContinuation(index);
    }
}