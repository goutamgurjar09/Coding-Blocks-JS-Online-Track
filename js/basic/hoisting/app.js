//accessing a variable/function before its declaration -> hoisting


//---------------------------
// b(); //yes
// console.log(a) //undefined


// var a = 30;
// function b(){
//     console.log(c); //undefined
//     var c = 100;
// }


//-----------------------
//note: whenever we use let & const keyword in the case of hoisting then it will get an error->  //ReferenceError: Cannot access 'varname' before initialization
//ReferenceError: Cannot access 'c' before initialization

// b(); 
// console.log(a)


// let a = 30;
// function b(){
//     console.log(c); //error
//     let c = 100;
// }


// ---------------------------------

// let a = 10;
// console.log(a); //no hoisting //10

// function b(){
//     console.log("aa dekhe zara kisme kitna hai dum")
// }

// b(); 


// ----------------------

// let a; //declare ---> js engine -> undefined --> let a = undefined;
// console.log(a); //no hoisting 
// a=100; //reinitialise
// function b(){
//     console.log("aa dekhe zara kisme kitna hai dum")
// }

// b(); 


// let btn = document.querySelector('button')
// // let body = document.querySelector('body')
// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor = "red";

// })