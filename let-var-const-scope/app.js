//->Var has globel/function scope 

//Reinitialization of Var
// var a = 10;
// a = 20;
// console.log(a); //20


//Redeclaration of Var
// var a = 50;
// console.log(a); //50



//---------------------------
//->let has Block scope means ise aap ek block ke ander hi access kr skte ho uske outside nhi

//Reinitialization of let
// let a = 10;
// a = 20;
// console.log(a); //20


//Redeclaration of let
// let a = 50;
// console.log(a); //Cannot redeclare block-scoped variable 'a'


//----------------------------
//->const has Block scope means ise aap ek block ke ander hi access kr skte ho uske outside nhi

//Note: Reinitialization and Redeclaration of const is not Possible 
// const a = 10;
// console.log(a); //10

//And isko apko immidiately initialize krna hai baad me nhi -> error dega
//ex:-
// const a;
// a = 10;
// console.log(a);//'const' declarations must be initialized


//------------------------
// if(true){
//     let a = "goutam sir";    //isko as a globel treat kr rha js engine
// }
// console.log("hello " + a);


//------------------------
//->Var has function scope means ise aap ek function ke inside hi access kr skte ho uske outside nhi   if you create a var inside the fun
// function fun(){  //function scope
//     if(true){   //block scope
//         var a = "goutam gurjar";  
//         console.log("hy " + a);  //hy goutam gurjar
//     }
// }

// fun()


//------------------------------
// function fun(){
//     if(true){
//         var a = "goutam sir";      
//     }
//     console.log("hy " + a);
// }

// fun()


//------------------------------
//->Var has function scope means ise aap ek function ke inside hi access kr skte ho uske outside nhi whenever you created a var inside the fun

// function fun(){
//     if(true){
//         var a = "goutam sir";      
//     }
// }
// console.log("hy " + a);   //a is not defined

// fun()

//-------------------------
//Let and Const have block scope and whenever you try to access them outside the  block scope  then it will thorow error
// function fun(){
//     if(true){ //block scope
//         let a = "goutam sir";   
//         const b = "lala sir";     
//     }
// }
// console.log("hy " + a + "and " + b);  //a is not defined 
// fun()


//---------------------------
//Let and Const have block scope and whenevr you try to access them outside the  block scope  then it will thorow error

//Still error
// function fun(){
//     if(true){ //block scope
//         let a = "goutam sir";   
//         const b = "lala sir";     
//     }
//     console.log("hy " + a + "and " + b);//a is not defined 
// }
  
// fun()

//--------------------------

//Let and Const have block scope 
// //Now fine
// function fun(){
//     if(true){ //block scope
//         let a = "goutam sir";   
//         const b = "lala sir"; 
//         console.log("hy " + a + " and " + b);  //hy goutam sir and lala sir 
//     }
// }
// fun()

//----------------------
//How to access globel scope variable inside block/function scope
// let a = 10;   
// const b = 20; 
// function fun(){
//     if(true){ //block scope
        
//         console.log(a+b);   //30
//     }

// }
  
// fun()

//-------------------

// let a = 10;   
// const b = 20; 
// function fun(){
//     if(true){ //block scope
        
//         console.log(a+b);   //30
//     }
// }
// console.log(a); //10
// fun()
// console.log(b); //20

//------------------

// let a = 10;   
// const b = 20; 
// function fun(){
//     if(true){ //block scope
//         a = 40;
//         b=20;              //TypeError:  Assignment to constant variable.
//         console.log(a+b);   
//     }
// }
// fun()


//------------------

// let a = 10;   
// const b = 20; 
// function fun(){
//     if(true){ //block scope
//         a = 40;
//         b=20;              //TypeError:  Assignment to constant variable.
//         console.log(a+b);   
//     }
// }
// console.log(a+b);  //30
// fun()
 

//-------------------


// let a = 10;   
// const b = 20; 
// function fun(){
//     if(true){ 
//         a = 40;          
//         console.log(a+b);     //60
//     }
// }
// console.log(a+b);  //30
// fun()
// console.log(a);  //40

//--------------------------

// var win = "india";

// if(true){
//     var win = "australia";
//     console.log(win); //australia
// }

// console.log(win)//australia


//-----------------------------
//bcz let has block scope and usko bahar bale let variable se koi mtlb nhi hai both var are different
// let win = "india";

// if(true){ //block scope
//     let win = "australia";
//     console.log(win); //australia
// }

// console.log(win); //india


//-----------------------------
//bcz Const has block scope and usko bahar bale const variable se koi mtlb nhi hai both var are different and dono ka scope alg hai
// const win = "india";

// if(true){ //block scope
//     const win = "australia";
//     console.log(win); //australia
// }

// console.log(win); //india


//--------------------------
//bcz Const has block scope and usko bahar bale  variable se koi mtlb nhi hai both var are different and dono ka scope alg hai

// let win = "india";

// if(true){ //block scope
//     const win = "australia";
//     console.log(win); //australia
// }

// console.log(win); //india



//--------------------------
// let Sone = document.getElementById('dropdown1');
// let Stwo = document.getElementById('dropdown2');



// Sone.addEventListener('change', function() {
//     // Store the current value of Stwo
//     let temp = Stwo.value;

//     // Set the value of Stwo to the value of Sone
//     Stwo.value = this.value;

//     // Set the value of Sone to the stored value of Stwo
//     this.value = temp;

//     // Log the values to the console
//     console.log("Sone:", Sone.value);
//     console.log("Stwo:", Stwo.value);
// });


