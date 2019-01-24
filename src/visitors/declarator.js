module.exports = {
    VariableDeclarator(path) {
        let left = path.node.id.name
        let right = path.node.init

        // x = y
        if (right.type == 'Identifier'){
            if(deb.includes(left) && left != right.name && !deb.includes(right.name)){
                deb.push(right.name)
            }
        }

        // x = y * z
        if(right.type == 'BinaryExpression' || right.type == 'CallExpression'){
            path.traverse({
                Identifier(path){
                    if (deb.includes(left) && left != path.node.name && !deb.includes(path.node.name)){
                        if(path.parent.type != 'CallExpression' || path.parent.arguments.indexOf(path.node) != -1){
                            deb.push(path.node.name)
                        }
                    }
                }
            })
        }
    }
}