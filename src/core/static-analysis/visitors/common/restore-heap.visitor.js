const t = require('babel-types');
function shallowCopy(object) {
  return object;
}

export default {
  MemberExpression(path) {
    if (
      path.node.object &&
      path.node.property &&
      path.node.object.name == 'delorean' &&
      (path.node.property.name == 'insertTimepoint' ||
        path.node.property.name == 'insertBreakpoint')
    ) {
      var snapshotCall = path.findParent((path) => path.isCallExpression());

      var itIsInLoop = false;
      parent = path.context.parentPath;
      while (parent) {
        parent = parent.context.parentPath;
        if (parent) {
          if (
            parent.node.type == 'ForStatement' ||
            parent.node.type == 'DoWhileStatement' ||
            parent.node.type == 'WhileStatement'
          ) {
            itIsInLoop = true;
            break;
          }
        }
      }

      let copy = 'ldDeepCopy';
      if (
        document.getElementsByClassName('swtich-options selected-switch')[0].innerHTML ==
        'Shallow Copy'
      )
        copy = shallowCopy;
      //Stores all dependant variables in a temp global object.
      /*
                heap.dependencies.map(dependecy => {
                    if (eval('typeof ' + dependecy.name.toString() + '!=\'undefined\'')) {
                        tempValueStore[dependecy.name.toString()] = eval(dependecy.name.toString());
                    } else {
                        tempValueStore[dependecy.name.toString()] = undefined;
                    }
                });
            */
      snapshotCall.insertBefore(
        t.expressionStatement(
          t.callExpression(
            t.memberExpression(
              t.memberExpression(t.identifier('heap'), t.identifier('dependencies'), false),
              t.identifier('map'),
              false,
            ),
            [
              t.arrowFunctionExpression(
                [t.identifier('dependecy')],
                t.blockStatement(
                  [
                    t.ifStatement(
                      t.callExpression(t.identifier('eval'), [
                        t.binaryExpression(
                          '+',
                          t.binaryExpression(
                            '+',
                            t.stringLiteral('typeof '),
                            t.callExpression(
                              t.memberExpression(
                                t.memberExpression(
                                  t.identifier('dependecy'),
                                  t.identifier('name'),
                                  false,
                                ),
                                t.identifier('toString'),
                                false,
                              ),
                              [],
                            ),
                          ),
                          t.stringLiteral("!='undefined'"),
                        ),
                      ]),
                      t.blockStatement([
                        t.expressionStatement(
                          t.assignmentExpression(
                            '=',
                            t.memberExpression(
                              t.identifier('tempValueStore'),
                              t.callExpression(
                                t.memberExpression(
                                  t.memberExpression(
                                    t.identifier('dependecy'),
                                    t.identifier('name'),
                                    false,
                                  ),
                                  t.identifier('toString'),
                                  false,
                                ),
                                [],
                              ),
                              true,
                            ),
                            t.callExpression(t.identifier('eval'), [
                              t.callExpression(
                                t.memberExpression(
                                  t.memberExpression(
                                    t.identifier('dependecy'),
                                    t.identifier('name'),
                                    false,
                                  ),
                                  t.identifier('toString'),
                                  false,
                                ),
                                [],
                              ),
                            ]),
                          ),
                        ),
                      ]),
                      t.blockStatement([
                        t.expressionStatement(
                          t.assignmentExpression(
                            '=',
                            t.memberExpression(
                              t.identifier('tempValueStore'),
                              t.callExpression(
                                t.memberExpression(
                                  t.memberExpression(
                                    t.identifier('dependecy'),
                                    t.identifier('name'),
                                    false,
                                  ),
                                  t.identifier('toString'),
                                  false,
                                ),
                                [],
                              ),
                              true,
                            ),
                            t.identifier('undefined'),
                          ),
                        ),
                      ]),
                    ),
                  ],
                  [],
                ),
              ),
            ],
          ),
        ),
      );
      // Restores variables when coming back form the future.
      /*
                if (fromTheFuture) {
                    let snapshot = restoreHeap(startFrom);
                    dependencies.map(key => {
                        auxSnapshotValue = ldDeepCopy(snapshot[key.name]);

                        if (typeof auxSnapshotValue == 'object') {
                            updatedObj = updateProp(key.name, auxSnapshotValue);
                            eval(key.name + ' = updatedObj');
                        } else {
                            eval(key.name + ' = document.getElementById(\'input-' + key.name + '\').value || undefined || auxSnapshotValue;');
                        }
                    });
                    fromTheFuture = false;
                }
            */
      snapshotCall.insertAfter(
        t.ifStatement(
          t.identifier('fromTheFuture'),
          t.blockStatement(
            [
              t.variableDeclaration('let', [
                t.variableDeclarator(
                  t.identifier('snapshot'),
                  t.callExpression(t.identifier('restoreHeap'), [t.identifier('startFrom')]),
                ),
              ]),
              t.expressionStatement(
                t.callExpression(
                  t.memberExpression(t.identifier('dependencies'), t.identifier('map'), false),
                  [
                    t.arrowFunctionExpression(
                      [t.identifier('key')],
                      t.blockStatement([
                        t.ifStatement(
                          t.binaryExpression(
                            '!=',
                            t.unaryExpression(
                              'typeof',
                              t.memberExpression(
                                t.identifier('snapshot'),
                                t.memberExpression(
                                  t.identifier('key'),
                                  t.identifier('name'),
                                  false,
                                ),
                                true,
                              ),
                              true,
                            ),
                            t.stringLiteral('function'),
                          ),
                          t.expressionStatement(
                            t.assignmentExpression(
                              '=',
                              t.identifier('auxSnapshotValue'),
                              t.callExpression(t.identifier(copy), [
                                t.memberExpression(
                                  t.identifier('snapshot'),
                                  t.memberExpression(
                                    t.identifier('key'),
                                    t.identifier('name'),
                                    false,
                                  ),
                                  true,
                                ),
                              ]),
                            ),
                          ),
                          t.expressionStatement(
                            t.assignmentExpression(
                              '=',
                              t.identifier('auxSnapshotValue'),
                              t.memberExpression(
                                t.identifier('snapshot'),
                                t.memberExpression(
                                  t.identifier('key'),
                                  t.identifier('name'),
                                  false,
                                ),
                                true,
                              ),
                            ),
                          ),
                        ),
                        t.ifStatement(
                          t.binaryExpression(
                            '==',
                            t.unaryExpression('typeof', t.identifier('auxSnapshotValue'), true),
                            t.stringLiteral('object'),
                          ),
                          t.blockStatement(
                            [
                              t.expressionStatement(
                                t.assignmentExpression(
                                  '=',
                                  t.identifier('updatedObj'),
                                  t.callExpression(t.identifier('updateProp'), [
                                    t.identifier('key.name'),
                                    t.identifier('auxSnapshotValue'),
                                  ]),
                                ),
                              ),
                              t.expressionStatement(
                                t.callExpression(t.identifier('eval'), [
                                  t.binaryExpression(
                                    '+',
                                    t.memberExpression(t.identifier('key'), t.identifier('name')),
                                    t.stringLiteral(' = updatedObj'),
                                  ),
                                ]),
                              ),
                            ],
                            [],
                          ),
                          t.blockStatement(
                            [
                              t.expressionStatement(
                                t.callExpression(t.identifier('eval'), [
                                  t.binaryExpression(
                                    '+',
                                    t.binaryExpression(
                                      '+',
                                      t.binaryExpression(
                                        '+',
                                        t.memberExpression(
                                          t.identifier('key'),
                                          t.identifier('name'),
                                          false,
                                        ),
                                        t.stringLiteral(" = document.getElementById('input-"),
                                      ),
                                      t.memberExpression(
                                        t.identifier('key'),
                                        t.identifier('name'),
                                        false,
                                      ),
                                    ),
                                    t.stringLiteral("').value || undefined || auxSnapshotValue;"),
                                  ),
                                ]),
                              ),
                            ],
                            [],
                          ),
                        ),
                      ]),
                      false,
                    ),
                  ],
                ),
              ),
              t.expressionStatement(
                t.assignmentExpression('=', t.identifier('fromTheFuture'), t.booleanLiteral(false)),
              ),
            ],
            [],
          ),
          null,
        ),
      );
    }
  },
};
