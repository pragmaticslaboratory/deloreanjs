module.exports = {
    VariableDeclarator(path) {
        let izq = path.node.id.name
        let der = path.node.init

        // x = y
        if (der.type == 'Identifier'){
            if(deb[izq] != undefined && izq != der.name && deb[izq].indexOf(path.node.name) == -1){
                deb[izq].push(der.name)
            }
        }

        // x = y * z
        if(der.type == 'BinaryExpression' || der.type == 'CallExpression'){
            path.traverse({
                Identifier(path){
                    if (deb[izq] != undefined && izq != path.node.name && deb[izq].indexOf(path.node.name) == -1){
                        if(path.parent.type != 'CallExpression' || path.parent.arguments.indexOf(path.node) != -1){
                            deb[izq].push(path.node.name)
                        }
                    }
                }
            })
        }
    }
}