module.exports = {
    AssignmentExpression(path) {
        let izq = path.node.left.name
        let der = path.node.right.name

        // izq = der
        if (der != undefined) {
            if (deb[izq] != undefined) {
                deb[izq].push(der)
            }
        } else {
            if (path.node.right.type == 'BinaryExpression') {
                path.traverse({
                    Identifier(path) {

                        if (deb[izq] != undefined && izq != path.node.name) {
                            deb[izq].push(path.node.name)
                        }
                    }
                })
            }
        }
    },
}