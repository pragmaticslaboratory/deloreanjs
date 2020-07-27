const t = require('babel-types');

module.exports = {
  CallExpression(path) {
    if (path.node.callee.property && path.node.callee.property.name == 'watch') {
      path.node.arguments[0].elements.map((element) => {
        global.dependencies.push({ name: element.value, type: 'normal' });
      });
    }
  },
};
