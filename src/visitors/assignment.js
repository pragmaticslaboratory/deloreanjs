module.exports = {
    AssignmentExpression(path) {
        let left = path.node.left.name
        let right = path.node.right.name

        // left = right
        if (right != undefined) {
            if (dependencies.includes(left) && left != right && !dependencies.includes(right)) {
                dependencies.push(right)
            }
        } 
          
        // x = y * z
        if (path.node.right.type == 'BinaryExpression' || path.node.right.type == 'CallExpression') {
            path.traverse({
                Identifier(path) {
                    
                    if (dependencies.includes(left) && left != path.node.name && !dependencies.includes(path.node.name)) {
                        dependencies.push({name: path.node.name, type: 'normal'})
                    }
                }
            })
        }
    }
}