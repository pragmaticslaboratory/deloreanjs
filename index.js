const fs = require('fs')
const babel = require('babel-core')

const visitors = require('./src/debugger')

module.exports = function readFile (fileName){
  return new Promise(function(resolve, reject) {
    fs.readFile(fileName, function (err, data) {
      if (err) throw err
    
      let src = data.toString()
      let out = babel.transform(src, {
        plugins: [visitors]
      })
      resolve(deb)
    });
  });
}
