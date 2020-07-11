const { heapSnapshot } = require("./heap");

global.breakpoint = {
  name: "",
  activate: false,
};

module.exports = {
  insertTimepoint: (id, loc = null) => {
    heapSnapshot(id, loc);
  },

  watch: (array) => {
    console.log("Debugging [" + array + "]");
  },

  insertBreakpoint: (id, loc = null) => {
    heapSnapshot(id, loc);
    breakpoint = {
      id,
      activate: true,
    };
  },
};
