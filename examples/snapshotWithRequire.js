let { snapshot }  = require('../src/heap')
let { storeSnapshot }  = require('../src/heap')


a = 7
snapshot()
a = 9
snapshot()
storeSnapshot();