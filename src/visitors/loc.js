const t = require("babel-types");

module.exports = {
  MemberExpression(path) {
    if (
      path.node.object &&
      path.node.property &&
      path.node.object.name == "delorean" &&
      (path.node.property.name == "insertTimepoint" ||
        path.node.property.name == "insertBreakpoint")
    ) {
      var snapshotCall = path.findParent((path) => path.isCallExpression());
      if (path.node.loc && snapshotCall.node.arguments.length <= 1) {
        let loc = path.node.loc.start.line;
        let id = snapshotCall.node.arguments[0].value;
        let functionName = path.node.property.name;
        snapshotCall.replaceWith(
          t.callExpression(
            t.memberExpression(
              t.identifier("delorean"),
              t.identifier(functionName),
              false
            ),
            [t.stringLiteral(id), t.numberLiteral(loc)]
          )
        );
      }
    }
  },
};
