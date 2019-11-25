const { heapSnapshot } = require('./heap');

global.breakpoint = {
    name: '',
    activate: false
};

module.exports = {
    insertTimepoint: (id) => {
        heapSnapshot(id);
    },

    watch: (array) => {
        console.log('Debugging [' + array + ']');
    },

    insertBreakpoint: (id) => {
        heapSnapshot(id);
        breakpoint = {
            id,
            activate: true,
        };
    }
}