module.exports = {
    VariableDeclarator(path) {
        let izq = path.node.id.name;
        let der = path.node.init

        // x = y
        if (der.type == 'Identifier'){
            if(deb[izq] != undefined){
                deb[izq].push(der.name)
            }
        }

        // x = y * z
        if(der.type == 'BinaryExpression'){
            path.traverse({
                Identifier(path){
                    if (deb[izq] != undefined && izq != path.node.name){
                        deb[izq].push(path.node.name)
                    }
                }
            })
        }
    }
}