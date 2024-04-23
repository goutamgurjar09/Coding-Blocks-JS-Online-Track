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
//note: whenever we use let & const keyword in the case of hoisting then it will get an error-> 
 //ReferenceError: Cannot access 'varname' before initialization
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

// let a; //---> js engine declared as to starting phase -> undefined --> let a = undefined;
// console.log(a); //no hoisting 
// a=100; //reinitialise
// function b(){
//     console.log("aa dekhe zara kisme kitna hai dum")
// }

// b(); 

//-------------change body color------------------
// let btn = document.querySelector('button')
// // let body = document.querySelector('body')
// btn.addEventListener('click',function(){
//     document.body.style.backgroundColor = "red";

// })

//-------------------------
// const a = 100;
// console.log(a);
// a = 200; //reinitialise --> invalid

// function b(){
//     console.log("goutam ji");
// }
// b()

//-----------------------

// b();
// console.log(a)
// var a = 10;

// function b(){
//     console.log("hy goutam  kha ho app");
// }

// hy goutam  kha ho app
// undefined

//------------------------
// console.log(a)//undefined
// b();

// var a = 10;

// function b(){
//     console.log("hy goutam  kha ho app");
// }

// undefined
// hy goutam  kha ho app




//------------------------
//in case of let-> ReferenceError: Cannot access 'a' before initialization
// console.log(a)
// b();

// let a = 10;

// function b(){
//     console.log("hy goutam  kha ho app");
// }

//------------------------

//in case of const-> ReferenceError: Cannot access 'a' before initialization
// console.log(a)
// b();

// const a = 10;

// function b(){
//     console.log("hy goutam  kha ho app");
// }

//--------------------------

// console.log(a);
// var a; //var a = 1000
// a=1000;
// console.log(a);

// undefined
// 1000


//-------------------------
//ReferenceError: Cannot access 'a' before initialization
// console.log(a); //error 
// const a = 1000; //-> error -> dead temporal zone || temporal dead zone
// console.log(a); //1000

//------------------------
//TypeError: Assignment to constant variable.

// const a = 1000; //-> error -> dead temporal zone || temporal dead zone
// a = 1000;
// console.log(a); //1000


// let inp = document.querySelector('input');
// let head = document.querySelector('h1')
// inp.addEventListener('input', (event)=>{
//     head.innerText = event.target.value;
// })

