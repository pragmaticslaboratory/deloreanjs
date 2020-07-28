const t = require('babel-types');
//Turns consequent of if blocks into blocks
module.exports = {
  IfStatement(path) {
    if (path.node.consequent.type != 'BlockStatement') {
      let block = t.blockStatement([path.node.consequent], []);
      path.node.consequent = block;
    }
  },
};
