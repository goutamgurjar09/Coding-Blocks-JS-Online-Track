//hoisting
// fun();
// console.log(a);   //undefined
// var a =10;

// function fun(){
//     console.log("fun value: "+ a); //undefined
// }

//Note: Here, we are invoking the fun function before its declaration. However, due to hoisting, the function declaration is moved to the top and it will log  undefined.
//Note:This means the declaration of a(var) is moved to the top of its scope during compilation, but the initialization (a = 10) remains in place. 
//So, at this point, a is declared but not yet initialized, resulting in the output undefined.
//----------------


//Using let/const
// fun();
// console.log(a);
// let a =10;

// function fun(){
//     console.log("fun value: "+ a);  //ReferenceError: Cannot access 'a' before initialization 
// }



//----------
//2.Note: So jb bhi hm kise variable/function ko let/const se declare krte hai to bo apna ek alg hi scope bna leta hai  Globel scope ke Uper Script ke ander jha pr value unavailable hoti hai means use access nhi kr skte   see on console source tab  ->Script a: <value unavailable>  

//Note: So jb bhi hm kise variable ko let/const se declare krte hai to bo Globel scope me memory allocate na krke bo  apna ek alg khud ka scope bna lete hai  Jise Temporal Dead Zone khte hai
//Note: When we declare a variable using let or const in JavaScript, it doesn't immediately allocate memory in the global scope. Instead, it creates its own separate scope called the Temporal Dead Zone.
// And if you try to access this variable from Temporal Zone then you will get an ReferenceError on console

//-----------------------------
// console.log(x);  // Throws ReferenceError: Cannot access 'x' before initialization
// let x = 10;


//In this example, the let declaration is hoisted, but accessing x before initialization leads to a ReferenceError due to the Temporal Dead Zone.
//because, during the temporal dead zone, x has been hoisted, but it's not yet initialized.

//Ex->see here behined the scene js will work look like this
// let x;
// console.log(x); 
// let x = 10;


//------------------

// console.log(x);   undefined
// var x = 13;

//--------------------
//Ex->see here behined the scene js will work look like this

// var x;
// console.log(x);  
// let x = 13;


//---------------------
//Arrow function are not hoisted like normal function
// gfg2();

// let gfg2 = () => {
//     console.log("function calling"); //ReferenceError: Cannot access 'gfg2' before initialization
// };

//int his code snippet, You're trying to call the gfg2() function before it's declared and initialized. However, since gfg2 is declared using let, it's not hoisted to the top of its scope like var declarations. 
//bcz of  temporal dead zone (TDZ), meaning it's not accessible before its declaration and initialization.

// let gfg2 = () => { console.log("function calling"); This line declares a variable gfg2 using the let keyword and assigns it an arrow function. 
//However, due to the TDZ,you are trying  to access gfg2 before it's declared and initialized results in a ReferenceError.


//--------------------

gfg();
var gfg = () => {
    console.log("function calling"); //TypeError: gfg2 is not a function
};
// gfg();: You're trying to call the gfg2() function before it's declared. However, since gfg is declared using var,
// it's subject to hoisting. During hoisting, the variable declaration is moved to the top of its scope, but the initialization (the arrow function) remains in place. So, at this point, gfg exists but is undefined, and attempting to call undefined as a function will result in a TypeError.

// var gfg = () => { console.log("function calling"); }: This line declares a variable gfg using the var keyword and assigns it an arrow function. However, as mentioned earlier,
// due to hoisting, the declaration is moved to the top of its scope during compilation, but the initialization (the arrow function) remains in place. So, at this point, gfg2 is declared but not yet initialized with the arrow function.
