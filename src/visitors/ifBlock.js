const t = require('babel-types');

module.exports = {
    IfStatement(path){
        if (path.node.consequent.type != 'BlockStatement'){
            let block = t.blockStatement([path.node.consequent], []);
            path.node.consequent = block;
        }
    }
}