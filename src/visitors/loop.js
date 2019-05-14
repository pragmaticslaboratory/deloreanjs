module.exports = {
    "ForStatement|DoWhileStatement|WhileStatement"(path){
        let test = path.get('test')

        if(test.type == 'BinaryExpression' || test.type == 'CallExpression'){
            let hasTimepoint = false;
            path.traverse({
                ExpressionStatement(path){
                    if(isTimePoint(path.node)) hasTimepoint = true;
                }
            })
            if (hasTimepoint){
                test.traverse({
                    Identifier(path){
                        if (!dependencies.some(dependency => dependency.name == path.node.name)){
                            dependencies.push({name: path.node.name, type: 'loop'})
                        }
                    }
                })
            }
        }
    }
}