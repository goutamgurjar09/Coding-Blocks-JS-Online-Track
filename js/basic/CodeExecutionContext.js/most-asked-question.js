//1.
// var a = 20;

// function meraFunction(){
//     console.log("inside meraFunction")
// }

// console.log(a);
// meraFunction();

// -----------Hoisting-----------------

// whenever we access the variable or the funciton before its declaration then it is called hoisting


// meraFunction(); //use
// console.log(a); //use //undefined
 
// var a = 20;  //define

// function meraFunction(){  //define
//     console.log("inside meraFunction")
// }



// ----------------------------
// hoiting
function a(){ //define
    console.log(b); //use   //undefined
    var b = 100 //define
}

a(); //access