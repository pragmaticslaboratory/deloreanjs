module.exports = {
    AssignmentExpression(path) {
        let left = path.node.left.name
        let right = path.node.right.name

        // left = right
        if (right != undefined) {
            if (deb.includes(left) && left != right && !deb.includes(right)) {
                deb.push(right)
            }
        } 
          
        // x = y * z
        if (path.node.right.type == 'BinaryExpression' || path.node.right.type == 'CallExpression') {
            path.traverse({
                Identifier(path) {
                    
                    if (deb.includes(left) && left != path.node.name && !deb.includes(path.node.name)) {
                        if(path.parent.type != 'CallExpression' || path.parent.arguments.indexOf(path.node) != -1){
                            deb.push(path.node.name)
                        }
                    }
                }
            })
        }
    }
}