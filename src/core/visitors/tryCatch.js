const t = require('babel-types');
//Adds try-catch blocks before and after every timepont.
global.isTimePoint = function (element) {
  return (
    element &&
    element.expression &&
    element.expression.callee &&
    element.expression.callee.object &&
    element.expression.callee.property &&
    element.expression.callee.object.name == 'delorean' &&
    (element.expression.callee.property.name == 'insertTimepoint' ||
      element.expression.callee.property.name == 'insertBreakpoint')
  );
};

const catchClause = t.catchClause(
  t.identifier('e'),
  t.blockStatement(
    [
      t.ifStatement(
        t.identifier('emptyContinuation'),
        t.blockStatement([
          t.expressionStatement(
            t.assignmentExpression(
              '=',
              t.identifier('emptyContinuationAux'),
              t.identifier('emptyContinuation'),
            ),
          ),
          t.expressionStatement(t.callExpression(t.identifier('emptyContinuation'), [])),
        ]),
        t.blockStatement([t.throwStatement(t.identifier('e'))]),
      ),
    ],
    [],
  ),
);

const hasCallExpression = (path) => {
  let isCallExpression = false;
  path.traverse({
    CallExpression(path) {
      if (path.node.callee.name != 'emptyContinuation') {
        isCallExpression = true;
      }
    },
  });
  return isCallExpression;
};

module.exports = {
  'Program|BlockStatement': {
    exit(path) {
      let block = path.node.body;
      let splitPoints = [];
      for (let i = 0; i < block.length; ++i) {
        if (
          global.isTimePoint(block[i]) ||
          (t.isIfStatement(block[i]) && block[i].name == 'emptyContinuation') ||
          t.isDoWhileStatement(block[i]) ||
          t.isTryStatement(block[i]) ||
          t.isWhileStatement(block[i]) ||
          t.isForStatement(block[i])
        ) {
          splitPoints.push(i);
        } else if (hasCallExpression(path.get('body')[i])) {
          splitPoints.push(i);
        }
      }
      let newBlock = [];
      let auxBlock = [];
      if (
        splitPoints.length != 0 &&
        (t.isProgram(path) || !t.isTryStatement(path.getStatementParent()))
      ) {
        for (let i = splitPoints.length - 1; i >= -1; --i) {
          auxBlock = newBlock;
          newBlock = [];
          let startOfTryBlock = 0;
          if (i != -1) startOfTryBlock = splitPoints[i] + 1;
          let endOfTryBlock = block.length;
          if (i < splitPoints.length - 1) endOfTryBlock = splitPoints[i + 1];
          if (i != -1) newBlock.push(block[splitPoints[i]]);
          newBlock.push(
            t.tryStatement(
              t.blockStatement(block.slice(startOfTryBlock, endOfTryBlock).concat(auxBlock), []),
              catchClause,
              null,
            ),
          );
        }
        //console.log(newBlock)
        //console.log(path.node)
        while (path.get('body').length != 0) path.get('body')[0].remove();
        for (let i = 0; i < newBlock.length; ++i) path.pushContainer('body', newBlock[i]);
      }
    },
  },
};
