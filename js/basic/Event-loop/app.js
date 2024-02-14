console.log("i am at top");  

setTimeout(() => {
    console.log("i am in setTimeout");
}, 0);

console.log("i am at end");


//1.What is Event loop and How does this work?    ->go on this website and understand with practical exmple->http://latentflip.com/loupe/

//In our example, when we will call the setTimeout() function, the JavaScript engine places it on the call stack, then it will (means setTimeout CB function) go on   Web Api  (from there this cb function goes to Web Api)
//and  the Web API creates a timer that expires in 0 milisecond/given milisecond.
//After the Timer expires Then JavaScript engine places/pass the CB() function into a queue/its called a callback queue.

//Now The event loop is a constantly running process that monitors/traking both the callback queue and the call stack.

//When the call stack is empty, the event loop places the next function from the callback queue to the call stack.
// If the call stack is not empty, the event loop waits until it is empty 


//Basically event loop ka kaam hai hmare callstack and callback queue ko chack krna ki  callstack empty hai ya nhi   and callback queue me koi function present hai ya nhi
//if callstack empty hai to ye callback queue se function ko callstack me pass/place kr dega and callstack us function ko execute kr dega

//and if callback queue me ek or function hoga to jaise hi callstack empty hoga fir se event loop is function ko bhi usme pass/place kr dega and callstack ise execute kr dega


// The main task of the event loop is to continuously check whether the call stack is empty or not and callback queue have any functions.

// If the call stack is not empty ,the event loop waits until it is empty as soon as callstack is empty 
//the event loop moves functions from the callback queue to the call stack for execution.

// If there are multiple functions in the callback queue and the call stack becomes empty,
// the event loop will repeat the process, moving each function from the callback queue to the call stack.


// Here's a breakdown:
// - Check if the call stack is empty.
// - Check if there is any function in the callback queue.
// - If yes, move the function from the callback queue to the call stack for execution.

// This process repeats, allowing asynchronous tasks to be executed without freezing the main thread.



//----------------------------------


//Asynchronous js code
//Note: Above code  is an Asynchronous code means it will not stop execution of the Further Code ->(means isse aage bala code execute ho jayega)
//Asynchronous code is executed in a non-linear fashion. this means that the next code can be executed  before the previous line code has finished executing.

//Note:bcz setTimeout() is a asynchronous function it will be execute after given time

//--------------------------
//Web-API
//In JavaScript, the term "Browser Web API" typically refers to a set of APIs (Application Programming Interfaces) 
//provided by web browsers to enable interaction with various aspects of the browser and the web environment. 
//These APIs are not part of the JavaScript language itself but are extensions provided by the browser environment
// to enable web developers to create dynamic and interactive web applications.

//Some common Browser Web APIs include:

//DOM (Document Object Model)

//AJAX (Asynchronous JavaScript and XML):

//Event API

//Geolocation API

//Web Storage API

//WebSockets API

//WebRTC API




//-------------------------
//Synchronous js code

//This is an Synchronous code it will quick execute line by line and will execute in order from top to bottom 
//It means that the next code will be executed only after the previous code has finished executing.
//ex:-
// console.log("i am at top");
// let fun = () => {
//     console.log("i am in arrow function");
// };
// console.log("i am at end")



//what is single-threaded js and What does it mean when we say JavaScript is single-threaded?
// JavaScript is a single-threaded language, means it has only one execution thread  means it will run one task at a time, sequentially.
//It means that the main thread where JavaScript code is run, runs in one line at a time manner


// What does this mean-> it has only one execution thread. ??
//When a system or program has "only one execution thread," 
//it means that it is designed to perform one task at a time, sequentially.


//what is threaded?
//In computer science, a thread refers to the smallest unit of execution within a process


