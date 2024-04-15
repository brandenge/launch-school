=begin
What is exception handling and what problem does it solve?

Exception handling is a tool that allows programmers to decide if they want to handle some errors differently than just having their program halt execution immediately whenever they encounter them.

Errors are essentially an undefined behavior that the computer program does not know how to proceed with and continue executing. Programming languages, compilers and interpreters cannot know how to define every possible behavior of a programming language. Even in some circumstances where it could make some kind of guess, it would be annoying or dangerous for it to do so blindly and automatically  by building it into the core of their systems. Therefore, rather than making an assumption about how the program should proceed with execution after encountering undefined behavior (which could have more dangerous consequences when things go really wrong), the default behavior is always going to be to simply halt execution of the program, which is the safest option by default.

However, programmers can define for the program what to do when it encounters certain types of undefined behavior which will allow the program to keep executing, by using exception handling. This makes the program more resilient and more difficult to crash in the face of small errors. Exception handling does this by changing the flow of control of the program without exiting the program entirely.

Note that not all errors/exceptions should be handled. Some errors are more severe than others, and could affect more critical systems, with more dangerous consequences. But it is up to programmers to make that human judgment about which errors/exceptions to handle and how to handle them. In other words, sometimes the best way to handle some critical errors is by not handling them at all and by letting the program crash on its own. Sometimes crashing is the appropriate response for the program to have to an error.
=end
