const { heapSnapshot } = require('./heap');

module.exports = {
    snapshot: () => {
        heapSnapshot();
    },
}