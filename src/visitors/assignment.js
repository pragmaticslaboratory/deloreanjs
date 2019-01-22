module.exports = {
    AssignmentExpression(path) {
        let izq = path.node.left.name
        let der = path.node.right.name

        // izq = der
        if (der != undefined) {
            if (deb[izq] != undefined && izq != der && deb[izq].indexOf(der) == -1) {
                deb[izq].push(der)
            }
        } 
          
        // x = y * z
        if (path.node.right.type == 'BinaryExpression' || path.node.right.type == 'CallExpression') {
            path.traverse({
                Identifier(path) {
                    if (deb[izq] != undefined && izq != path.node.name && deb[izq].indexOf(path.node.name) == -1) {
                        if(path.parent.type != 'CallExpression' || path.parent.arguments.indexOf(path.node) != -1){
                            deb[izq].push(path.node.name)
                        }
                    }
                }
            })
        }
    }
}