module.exports = {
    AssignmentExpression(path) {
        let left = path.node.left;
        while(left.type == 'MemberExpression'){
            left = left.object;
        }
        if(left.type == 'Identifier')left = left.name;
        let right = path.node.right.name;

        // left = right
        if (right != undefined) {
            if (dependencies.some(dependency => dependency.name == left) && left != right && !dependencies.some(dependency => dependency.name == right)) {
                dependencies.push({name: right, type: 'normal'})
            }
        } 
          
        // x = y * z
        if (path.node.right.type == 'BinaryExpression' || path.node.right.type == 'CallExpression') {
            path.traverse({
                Identifier(path) {                   
                    if (dependencies.some(dependency => dependency.name == left) && left != path.node.name && !dependencies.some(dependency => dependency.name == path.node.name)) {
                        dependencies.push({name: path.node.name, type: 'normal'})
                    }
                }
            })
        }
    }
}