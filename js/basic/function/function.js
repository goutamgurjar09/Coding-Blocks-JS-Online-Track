//--- SYNTAX --->

// function defination/decalration

// function sum(){

// }
//sum()  //calling

// ------------------------------
// function sum(){
//     let num1 = 10;
//     let num2 = 10;
//     console.log(num1,num2)
// }
// sum();//10 10
// sum();//10 10
// sum();//10 10

// ------------------------------
// function sum(){
//     let num1 = 10;
//     let num2 = 10;
   
// }
// let a = sum();
// console.log(a)   //undefined

// ----------------------------

// function sum(num3){ //parameter
//     let num1 = 10;
//     let num2 = 10;
//     console.log(num1,num2,num3)
// }
// sum(50);//10 10 50

// ----------------------------
// function sum(num3){ //parameter
//     let num1 = 10;
//     let num2 = 10;
//     console.log(num1 + num2 + num3)
// }
// sum(50);//10 10 50

// ----------------------------
//function sum(num3){ //parameter
//     let num1 = 10;
//     let num2 = 30;
//     console.log(num1 + num2 + num3); 
// }

// sum(50); //argument

// ----------------------------

// -------parametriised functions--------
// function sum(n1, n2, n3){ 
//     let num1 = n1;
//     let num2 = n2;
//     console.log(num1 + num2 + n3); 
// }

// sum(50,10,20); //80

// ----------------------------------

// function sum(n1, n2, n3){ 
//     let num1 = n1;
//     let num2 = n2;
//     console.log(num1 + num2 + n3); 
// }

// sum(50,10); //NaN
//The output of the provided JavaScript code will be NaN (Not-a-Number) because you are trying to add two numbers and a third parameter n3, but you only pass two arguments (10 and 30) when calling the sum function. In JavaScript, when you try to add a number and undefined (which is what n3 will be in this case because it's not provided as an argument), the result is NaN.

// ----------------------------------
// ---- default parameterised functions -------

// function sum(n1, n2, n3=70){ 
//     let num1 = n1;
//     let num2 = n2;
//     console.log(num1 + num2 + n3); 
// }

// sum(50,10); //130
// sum(5,10);//85

// ----------------------------------

// function sum(n1, n2, n3=70){ //override default parameter (this value) and use provided value(arguments) by function call
//     let num1 = n1;
//     let num2 = n2;
//     console.log(num1 + num2 + n3); 
// }

// sum(50,10,20); //80


//-------------------
// function sum(n1){ 
//     let num1 = 20;
//     let ans = num1 + n1;
//     return ans;
// }
// let finalans =sum(50); 
// console.log(finalans); //70

//or console.log(sum(50)); //70

//-------------------
// function sum(n1){ 
//     let num1 = 20;
//     let ans = num1 + n1;
// }
// let finalans =sum(50); 
// console.log(finalans); //undefined
// //'ans' is declared but its value is never read. bcz you didn't  return ans so it will return undefined

//-------------------
function sum(n1){ 
    let num1 = 80;
    let ans = num1 + n1;
    console.log("goutam");// goutam
    return ans;// 170
    return 2;//ignore
    console.log("goutam");//ignore/Unreachable/inaccessiable code detected.

}
let finalans =sum(90); 
console.log(finalans);


