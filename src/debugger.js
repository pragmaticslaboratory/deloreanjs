const { dependeciesVisitor, initConfigVisitor, restoreHeapVisitor, restoreContinuationVisitor } = require('../src/staticAnalysis');

module.exports = (filename) => {
    let { code } = require('../index')(filename, [dependeciesVisitor, initConfigVisitor]);
    console.log("Se ejecuta")
    let unwindedCode = require('../unwinder/bin/compile.js')(code);
    // console.log(unwindedCode);
    try{
        eval(unwindedCode);
        // TODO: pausa
    }
    catch(e){
        console.log(e);
        do{
            global.restore;

            /* TODO: eventos y inputs */
            

            const readline = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout
            })
              
              readline.question(`Which state do you want to restore`, (state) => {
                restore = "kont" + state;
                readline.close()
            })

            // change heap variables
            let visitors = [restoreHeapVisitor, restoreContinuationVisitor] 
            let restoredCode = babel.transform(code, {
                plugins: visitors
            }).code;
            
            try{
                //unwindCode
                eval(restoredCode/*unwindedRestoredCode*/);
            }
            catch(e){
                console.log(e);
            }
        }while(true/*The extension is running*/);
    }
    
}