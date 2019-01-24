module.exports = {
    AssignmentExpression(path) {
        let left = path.node.left.name
        let right = path.node.right.name

        // left = right
        if (right != undefined) {
            if (deb[left] != undefined && left != right && deb[left].indexOf(right) == -1) {
                deb[left].push(right)
            }
        } 
          
        // x = y * z
        if (path.node.right.type == 'BinaryExpression' || path.node.right.type == 'CallExpression') {
            path.traverse({
                Identifier(path) {
                    if (deb[left] != undefined && left != path.node.name && deb[left].indexOf(path.node.name) == -1) {
                        if(path.parent.type != 'CallExpression' || path.parent.arguments.indexOf(path.node) != -1){
                            deb[left].push(path.node.name)
                        }
                    }
                }
            })
        }
    }
}