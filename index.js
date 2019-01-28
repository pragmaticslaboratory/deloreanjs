const fs = require('fs');
const babel = require('babel-core');

module.exports = (fileName, visitors) => {
  let data = fs.readFileSync(fileName)

  let src = data.toString();
  let { code } = babel.transform(src, {
    plugins: visitors
  })
  return { deb, code };
}

