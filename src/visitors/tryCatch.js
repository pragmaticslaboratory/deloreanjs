const t = require('babel-types');

module.exports = {
   "Program|BlockStatement": {
        exit(path) {
            let block = path.node.body;
            let splitPoints = [];       
            console.log(block);     
            for (let i = 0; i < block.length; ++i){
                if (block[i] && block[i].expression && block[i].expression.callee &&
                    block[i].expression.callee.object && block[i].expression.callee.property &&
                    block[i].expression.callee.object.name == 'delorean' && block[i].expression.callee.property.name == 'snapshot') {
                    splitPoints.push(i);     
                }
            }
            if(splitPoints != []){
                let newBlock = block.slice(0, splitPoints[0]);
                for (let i = 0; i < splitPoints.length; ++i) {  
                    let endOfTryBlock = block.length - 1;
                    if(i < splitPoints.length - 1) endOfTryBlock = splitPoints[i + 1]                
                    newBlock.push(block[splitPoints[0]]);      
                    newBlock.push(
                        t.tryStatement(
                            block.slice(splitPoints[i] + 1, endOfTryBlock + 1),
                            t.catchClause(
                                t.identifier('e'),
                                t.blockStatement(
                                    [t.expressionStatement(
                                        t.callExpression(
                                            t.memberExpression(
                                            t.identifier('console'),
                                            t.identifier('log') 
                                            ),
                                            [t.identifier('e')]
                                        )
                                    )]
                                )
                            ),
                            null
                        )
                    );               
                }
                if(t.isProgram(path.node)){
                    path.replaceWith(t.program(newBlock, []));
                    console.log(path.node.directives);
                }
                console.log(newBlock)                
                console.log(block)
            }
        }
    }
}