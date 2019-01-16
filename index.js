const fs = require('fs')
const babel = require('babel-core')

const visitors = require('./src/index')
let fileName = './tests/test2.js'

fs.readFile(fileName, function (err, data) {
  if (err) throw err

  let src = data.toString()
  let out = babel.transform(src, {
    plugins: [visitors]
  })

});