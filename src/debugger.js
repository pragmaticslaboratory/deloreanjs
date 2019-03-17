const { dependeciesVisitor, initConfigVisitor, storeContinuationsVisitor, restoreHeapVisitor, restoreContinuationVisitor } = require('../src/staticAnalysis');
const babel = require('babel-core');

module.exports = (filename) => {
    let { code } = require('../index')(filename, [dependeciesVisitor, initConfigVisitor, storeContinuationsVisitor]);
    let unwindedCode = require('../unwinder/bin/compile.js')(code);

    try{
        eval(unwindedCode);

        // TODO: pausa
    }
    catch(e){
        do{
            console.log(e, 'first error detected');
            
            /* TODO: eventos y inputs */
            global.restore = 1;

            /*const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            })
              
            readline.question('Which state do you want to restore', (state) => {
                restore = 'kont' + state;
                readline.close()
            })*/

            /*change heap*/
            heap.snapshots[restore].b = 8;

            let visitors = [restoreContinuationVisitor, restoreHeapVisitor] 
            let restoredCode = babel.transform(code, {
                plugins: visitors
            }).code;

            let unwindedRestoredCode = require('../unwinder/bin/compile.js')(restoredCode);
            
            try {
                // console.log(restoredCode);
                eval(unwindedRestoredCode);              
            } catch(e) {
                console.log(e, 'second catch');
            }

        }while(false /*TODO: Condition: The extension is running*/);
    }
}


/*
pause = true;
function pause(e){
    if(e) {
        console.log('error', e)
    } else {
        console.log('pausa')
    }
    while(pause) {
        if(!pause){
            restoreProgram(restore)
        }
    }
}

// backend debugger.js
function restoreProgram(restore) {
    var input = {};
    a = input.a || a
    b = input.b || b
    c = input.c || c
    x = input.x || x 
    continuations.kont[restore]();
}

try {
//code
} catch(e) {
    pause(e)
}

pause()
*/