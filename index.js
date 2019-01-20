const fs = require('fs')
const babel = require('babel-core')

const visitors = require('./src/debugger')
let fileName = './tests/test4.js'

fs.readFile(fileName, function (err, data) {
  if (err) throw err

  let src = data.toString()
  let out = babel.transform(src, {
    plugins: [visitors]
  })

});