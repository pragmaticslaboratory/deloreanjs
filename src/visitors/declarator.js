module.exports = {
    VariableDeclarator(path) {
        let left = path.node.id.name
        let right = path.node.init
        
        if(right != null){
            // x = y
            if (right.type == 'Identifier'){
                if(dependencies.includes(left) && left != right.name && !dependencies.includes(right.name)){
                    dependencies.push(right.name)
                }
            }

            // x = y * z
            if(right.type == 'BinaryExpression' || right.type == 'CallExpression'){
                path.traverse({
                    Identifier(path){
                        if (dependencies.includes(left) && left != path.node.name && !dependencies.includes(path.node.name)){
                            if(path.parent.type != 'CallExpression' || path.parent.arguments.indexOf(path.node) != -1){
                                dependencies.push(path.node.name)
                            }
                        }
                    }
                })
            }
        }
    }
}