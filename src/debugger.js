const { dependeciesVisitor, initConfigVisitor, storeContinuationsVisitor, restoreHeapVisitor, restoreContinuationVisitor } = require('../src/staticAnalysis');
const babel = require('babel-core');

module.exports = (filename) => {
    let { code } = require('../index')(filename, [dependeciesVisitor, initConfigVisitor, storeContinuationsVisitor]);
    let unwindedCode = require('../unwinder/bin/compile.js')(code);


    // Esta funcion es tempral, debido a que cambiara la forma de restaurar el heap
    const temporalTransofrm = (kont) => {
        console.log('hola')
        global.restore = kont;
        heap.snapshots[restore].b = 8;

        let visitors = [restoreContinuationVisitor, restoreHeapVisitor] 
        let restoredCode = babel.transform(code, {
            plugins: visitors
        }).code;

        let unwindedRestoredCode = require('../unwinder/bin/compile.js')(restoredCode);
        try {
            eval(unwindedRestoredCode);              
        } catch(e) {
            console.log(e, 'second catch');
        }
    }

    // Crea un boton por cada timepoint creado por el usuario
    const createButtons = () => {
        const container = document.getElementById('container')
        let index = 0;
        heap.snapshots.map((kont) => {
            container.insertAdjacentHTML('beforeend', `<button kont="${++index}" id="${index}">kont ${index}</button>`);
        })
    }

    // Se evalua el codigo del usuario por primera vez
    try{
        eval(unwindedCode);
    } catch(e){
        console.log(e, 'first error detected');
    }

    createButtons();

    // Eventos
    const container = document.getElementById('container')
    container.addEventListener('click', (item) => {
        let kont = item.target.getAttribute('kont')
        // Se reanuda en la continuacion escogida
        temporalTransofrm(kont);
    })
}

/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Which state do you want to restore', (state) => {
    restore = 'kont' + state;
    readline.close()
})*/



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
    a = input.a || agrdrgddfg
    fdsfsfffsdz
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