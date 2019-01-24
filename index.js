const fs = require('fs');
const babel = require('babel-core');

const visitors = require('./src/debugger');

module.exports = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) throw err
    
      let src = data.toString();
      let out = babel.transform(src, {
        plugins: [visitors]
      })

      resolve(deb);
    })
  });
}

