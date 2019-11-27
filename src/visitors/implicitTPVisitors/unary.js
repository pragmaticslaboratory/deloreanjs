const t = require('babel-types')
module.exports = {
    UnaryExpression(path) {
        let operator = path.node.operator;
        if (operator == '--' || operator == '++' || operator == 'delete'){
            let argument = path.node.argument;
            while(argument.type == 'MemberExpression' || argument.type == 'CallExpression'){
                if(argument.type == 'MemberExpression'){
                    argument = argument.object;
                }
                else{
                    argument = argument.callee;
                }
            }
            if (argument.type == 'Identifier' && dependencies.some(dependency => dependency.name == argument.name)) {
                while(parent && parent.node.type != 'ExpressionStatement'){
                    parent = parent.context.parentPath;
    
                }
                if(parent && !isTimePoint(parent.getSibling(parent.key + 1).node)){
                     parent.insertAfter(
                        t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('delorean'),
                                    t.identifier('insertTimepoint'),
                                    false
                                ),
                                [
                                    t.stringLiteral('Implicit' + implicitCounter)
                                ]
                            )
                        )
                    );    
                    ++implicitCounter;       
                }
            }
        }
    }
}
