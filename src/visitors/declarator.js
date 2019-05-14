module.exports = {
    VariableDeclarator(path) {
        let left = path.node.id.name
        let right = path.node.init

        if(right != null){
            // x = y
            if (right.type == 'Identifier'){
                if(dependencies.some(dependency => dependency.name == left) && left != right.name && !dependencies.some(dependency => dependency.name == right.name)){
                    dependencies.push({name: right.name, type: 'normal'})
                }
            }

            // x = y * z
            if(right.type == 'BinaryExpression' || right.type == 'CallExpression'){
                path.traverse({
                    Identifier(path){
                        if (dependencies.some(dependency => dependency.name == left) && left != path.node.name && !dependencies.some(dependency => dependency.name == path.node.name)){
                            dependencies.push({name: path.node.name, type: 'normal'})
                        }
                    }
                })
            }
        }
    }
}