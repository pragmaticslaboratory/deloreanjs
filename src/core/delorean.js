const { heapSnapshot } = require('./heap');

global.breakpoint = {
  name: '',
  activate: false,
};

module.exports = {
  breakpoint: global.breakpoint,

  insertTimepoint: (id, loc = null) => {
    heapSnapshot(id, loc);
  },

  watch: (array) => {
    console.log('Debugging [' + array + ']');
  },

  insertBreakpoint: (id, loc = null) => {
    heapSnapshot(id, loc);
    global.breakpoint = {
      id,
      activate: true,
    };
  },
};
