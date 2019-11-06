# DeloreanJs: A Back-in-time Debugger for JavaScript

<img src="http://pleger.cl/sites/deloreanjs/logo.png" style="display: block; margin-left: auto; margin-right: auto; max-width:10%">


*JavaScript* Web applications are continually developing, as in most development environments, a Web application can acquire software flaws (known as *bugs*), whose symptoms are seen during the development stage and, even worse, in production. The use of debuggers is extremely useful for detecting bugs. Unfortunately, existing debuggers only step (back) in the execution to detect a bug and do not allow developers to go to a previous point in the execution to take actions associated with the detected bug. This limitation does not allow developers to modify the value of a variable to fix a bug while the application is running or test if the same bug is triggered with another value of that variable. Using concepts such as continuations and static analysis, we present a practical debugger for JavaScript, named *DeloreanJs*, which enables programmers to go back-in-time in the execution of a Web application to fix, improve the understanding, or experiment with the context execution related to a bug. In addition, the use of the back-in-time approach can allow us to emulate features of existing debuggers. Although DeloreanJs is developed for JavaScript, we compare our proposal with the state-of-art/practice of debuggers in terms of features. This debugger has been implemented for testing online by any JavaScript developer.

Try it out now!
---

*Do you want to be a time traveler (in your JavaScript code)?* Please, use its Web application [http://pleger.cl/sites/deloreanjs](http://pleger.cl/sites/deloreanjs)

What is the new?
----

The DeloreanJs approach provides four novel features:

- **Fix a bug while an application is executing.** Keep a Web application working while a developer fixes a bug. This means that the developer does not require stopping the application execution to carry out a postmortem analysis.          
	
- **Improve understanding of a bug.** Repeatedly modify variable values associated with a bug to improve understanding of its cause. This can save a large number of executions (*i.e.,* time) because DeloreanJs allows developers to reuse the same execution trace with potentially different values in variables to discover the reason for the bug.       

- **Experiment hypothetical scenarios.** Experiment hypothetical scenarios of a Web application execution. This allows developers to explore diverse evolutions from an execution point with different variable values. 
		
- **Integrate existing debugger features.** To be a practical debugger, DeloreanJs is also useful to integrate other features of existing debuggers. For this reason, our approach can emulate breakpoint and navigation features. The emulation of features claims that timepoints do not conflict with related debuggers, meaning an extension to the state-of-the-art/practice debuggers.  


Of course, DeloreanJs is open source. This software is developed on [Pragmatics Lab](http://pragmaticslab.com). 


License
----

MIT



