let { snapshot }  = require('../src/heap')

a = 7
snapshot()
a = 9
snapshot()
