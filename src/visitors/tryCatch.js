const t = require('babel-types');

function isTimePoint(element){
    return element && element.expression && element.expression.callee &&
    element.expression.callee.object && element.expression.callee.property &&
    element.expression.callee.object.name == 'delorean' && element.expression.callee.property.name == 'insertTimePoint';
}

module.exports = {
   "Program|BlockStatement": {
        exit(path) {
            let block = path.node.body;
            let splitPoints = [];          
            for (let i = 0; i < block.length; ++i){
                if (isTimePoint(block[i])) {
                    splitPoints.push(i);     
                }
            }
            if(splitPoints.length != 0){
                let newBlock = [];
                for (let i = -1; i < splitPoints.length; ++i) {  
                    let startOfTryBlock = 0;
                    if(i != - 1) startOfTryBlock = splitPoints[i] + 1;  
                    let endOfTryBlock = block.length;
                    if(i < splitPoints.length - 1) endOfTryBlock = splitPoints[i + 1];                
                    if(i != -1) newBlock.push(block[splitPoints[i]]);      
                    newBlock.push(
                        t.tryStatement(
                            t.blockStatement(
                                block.slice(startOfTryBlock, endOfTryBlock),
                                []
                            ),
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
                console.log(newBlock)                
                console.log(path.node)
                while(path.get('body').length != 0) path.get('body')[0].remove();     
                for(let i = 0; i < newBlock.length; ++i) path.pushContainer('body', newBlock[i]);
            }
        }
    }
}