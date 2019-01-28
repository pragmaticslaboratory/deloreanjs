const fs = require('fs');
const babel = require('babel-core');

const visitors = require('./src/debugger');

module.exports = (fileName) => {
  let data = fs.readFileSync(fileName)

  let src = data.toString();
  let out = babel.transform(src, {
    plugins: [visitors]
  })
  return deb;
}

