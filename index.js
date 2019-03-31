const fs = require('fs');
const babel = require('babel-core');

module.exports = (originalCode, visitors, isString) => {
  let data;

  if(isString) {
    data = originalCode;
  }
  else {
    data = fs.readFileSync(__dirname + `/test/t3.1_indexTest.spec.js`, 'utf8');
  }

  let src = data.toString();
  let { code } = babel.transform(src, {
    plugins: visitors
  })
  return { dependencies, code };
}

