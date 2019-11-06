# Delorean: A back-in-time debugger for JavaScript

<img src="http://pragmaticslab.com/wordpress/wp-content/uploads/2018/09/LogoPragmaticsLab.png" width="240">

Summary
---

JavaScript Web applications are continually developing, as in most development environments, a Web application can acquire software flaws (known as bugs), whose symptoms are seen during the development stage and, even worse, in production. The use of debuggers is extremely useful for detecting bugs. Unfortunately, existing debuggers only step (back) in the execution to detect a bug and do not allow devel- opers to go to a previous point in the execution to take actions associated with the detected bug. This limitation does not allow developers to modify the value of a variable to fix a bug while the application is running or test if the same bug is triggered with another value of that variable. Using concepts such as continuations and static analysis, we present a practical debugger for JavaScript, named DeloreanJS, which enables programmers to go back-in-time in the execution of a Web application to fix, improve the understanding, or experiment with the context execution related to a bug. In addition, the use of the back-in-time approach can allow us to emulate features of existing debuggers. Although DeloreanJS is developed for JavaScript, we compare our proposal with the state-of-art/practice of debuggers in terms of features. This debugger has been implemented for testing online by any JavaScript developer.

Usage
---

Do you want to be a time traveler? Please, visit the webpage [http://pleger.cl/sites/deloreanjs](http://pleger.cl/sites/deloreanjs)

Tech
----


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
