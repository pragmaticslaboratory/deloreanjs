# Delorean

<img src="http://pragmaticslab.com/wordpress/wp-content/uploads/2018/09/LogoPragmaticsLab.png" width="240">

Delorean is a proposal of a debugger for JavaScript.

  - You can go back to any point of your program
  - Extension for the browser
  - Continuations use case

Usage
---

Please, visit the webpage [http://pleger.cl/sites/deloreanjs](http://pleger.cl/sites/deloreanjs)
---

Tech
----

Delorean uses a number of open source projects to work properly:

* [Babel](https://babeljs.io) - awesome and configurable transpiler!
* [Node.js](https://nodejs.org/) - evented I/O for the backend
* [mocha](https://mochajs.org/) - simple, flexible JavaScript test framework
* [unwinder](https://github.com/jlongster/unwinder) - an implementation of continuations in JavaScript

And of course Delorean itself is open source with a [public repository](https://github.com/fruizrob/delorean)
 on GitHub.

Installation
---

Delorean requires [Node.js](https://nodejs.org/) v9+ to run.

Install the dependencies.

```sh
$ cd delorean
$ npm install
```

Run mocha tests.

```sh
$ npm run test
```

License
----

MIT
