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
                        if (!dependencies.includes(path.node.name)){
                                dependencies.push(path.node.name)
                        }
                    }
                })
            }
        }
    }
}