// var b = 20;
// function a(){
//     console.log(b);//20
// }

// a();

//--------------------
// function outer(){
// var b = 20;
//     function inner(){
//         console.log(b);
//     }
//     inner();
// }
// //inner();//X-> you can't call inner fun outside inner function scope
// outer()


//-----------------------

// var b = 50;
// function outer(){
//     var b = 20;
        
//         inner(); //you can call it here also
//         function inner(){
//             console.log(b);//20
//         }
        
//     }
// outer()
//ydi use b ki value inner me nhi mile to vo uske parent me dekhega or ydi bha bhi nhi mile to vo uske bhi parent me dekhega


//---------------------

// var b = 50;
// function outer(){
   
//         inner(); //you can call it here also
//         function inner(){
//             console.log(b);//50
//         }
        
//     }
// outer()

//---------------------

//ReferenceError: b is not defined 
// function outer(){
   
//         inner(); //you can call it here also
//         function inner(){
//             console.log(b);
//         }
        
//     }
// outer()

//-----------------------
// var b;
// function outer(){
   
//     inner(); //you can call it here also
//     function inner(){
//         console.log(b);//undefined
//     }
    
// }
// outer()


//-------------------------

// var a = 50;
// function outer(){
//     var b = 20;
        
//         inner(); //you can call it here also
//         function inner(){
//             var b = 100;
//             console.log(b);//100
//         }
        
//     }
// outer()

//------------------------------

// var a = 100;

// function outer(){
//     var b = 10;

//     inner();
//     function inner(){
//         var b = 1000;
//         console.log(b);
//     }

//     console.log(b);
// }

// outer();

//------------------

// var a = 100;

// function outer(){
//     var b = 10;

//     inner();
//     function inner(){
//         var b = 1000;
//         console.log(b);
//     }

//     console.log(b);
// }
// console.log(b);// b is not defined
// outer();


// //-------------------
// var a = 100;

// function outer(){
//     var b = 10;
//     inner();
//     function inner(){
//         var b = 1000;
//         console.log(b);
//     }
//     console.log(b);
// }
// console.log(a);
// outer();
// 100
// 1000
// 10

//------------------


// var a = 100;

// function outer(){
//     var b = 10;
//     console.log(b);
//     inner();
//     function inner(){
//         var b = 1000;
//         console.log(b);
//     }
    
// }
// console.log(a);
// outer();
// 100
// 10
// 1000


//-------------------

// var a = 100;

// function outer(){
//     var b = 10;
//     inner();
//     function inner(){
//         //var b = 1000;
//         console.log(b);
//     }
    
// }
// console.log(a);
// outer();


//-----------------

// var a;

// function outer(){
//     let b = 10;
//     inner();
//     function inner(){
//         //var b = 1000;
//         console.log(b);
//     }
    
// }
// console.log(a);
// outer();

// undefined
// 10

//------------------


// var a = 100;

// function outer(){
//     const b = 10;
//     inner();
//     function inner(){
//         //var b = 1000;
//         console.log(b);
//     }
    
// }
// console.log(a);
// outer();

// 100
// 10

//--------------------------

// var a = 100;

// function outer(){
//     const b = 10;
//     inner();
//     function inner(){
//         var b = 1000;
//         console.log(b);
//     }
    
// }
// console.log(a);
// outer();

// 100
// 1000


// var a = 100;

// function outer(){
//     const b = 10;
//     inner();
//     function inner(){
//         var b = 1000;
//         console.log(b);
//     }
// console.log(b);   
    
// }
// console.log(a);
// outer();


//------------------------

// var a = 100;

// function outer(){
    
//     const b = 10;
//     inner();
//     function inner(){
//         console.log(b); //10
//     }
//     console.log(a); //100
// }

// outer();

//------------


// let a = 100;
// function outer(){
//     console.log(a);
//     const b = 10;
//     inner();
//     function inner(){
//         console.log(b);
        
//     }
    
// }

// outer();
// 100
// 10