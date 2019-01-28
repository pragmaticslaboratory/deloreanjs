const fileOut = "./examples/snapshotWithRequire.js"
const ProgramVisitor = require('./src/visitors/program')(fileOut);

const fs = require('fs');
const babel = require('babel-core');

const visitors = function () {
    return {
        visitor: ProgramVisitor
    };
}

module.exports = function (fileIn){
    let data = fs.readFileSync(fileIn);

    let src = data.toString();
    let out = babel.transform(src, {
        plugins: [visitors]
    })
    return out.code;
}



