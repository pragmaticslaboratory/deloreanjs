module.exports = {
    VariableDeclarator(path) {
        let left = path.node.id.name
        let right = path.node.init

        // x = y
        if (right.type == 'Identifier'){
            if(deb[left] != undefined && left != right.name && deb[left].indexOf(path.node.name) == -1){
                deb[left].push(right.name)
            }
        }

        // x = y * z
        if(right.type == 'BinaryExpression' || right.type == 'CallExpression'){
            path.traverse({
                Identifier(path){
                    if (deb[left] != undefined && left != path.node.name && deb[left].indexOf(path.node.name) == -1){
                        if(path.parent.type != 'CallExpression' || path.parent.arguments.indexOf(path.node) != -1){
                            deb[left].push(path.node.name)
                        }
                    }
                }
            })
        }
    }
}