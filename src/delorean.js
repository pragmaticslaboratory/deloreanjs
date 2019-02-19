const { heapSnapshot } = require('./heap');
const { createContinuation } = require('./continuations')

module.exports = {
    snapshot: () => {
        heapSnapshot();
        createContinuation();
    }
}