// function sum(n1 , n2){
//     return n1 + n2;
// }
// console.log(sum(1,5))//6

//------------------
// function sum(n1 , n2){
//      console.log(n1);//undefined
//      console.log(n2);//undefined

//     return n1 + n2;//NaN
// }
// console.log(sum())//passing no arguments

// This is because the sum function is defined to take two arguments, n1 and n2, but when the function is called, no arguments are provided. 
// Therefore, the values of n1 and n2 will be undefined, and the sum of undefined and undefined is NaN (Not a Number).


// ------------------------------

// function sum(n1 , n2=20){
//     console.log(n1);//15
//     console.log(n2);//20

//    return n1 + n2;//35 to sum function
// }
// console.log(sum(15))
// 15
// 20
// 35

//note:if you pass only one arguments then it will use default parameter value which is-> n2=20

//-----------------------

// function sum(num1 = 40 , num2 = 20){
//     console.log(num1); //10 //it will print provided value->sum(10); by fun
//     console.log(num2); //20
//     return num1 + num2;  // 30
// }

// let output = sum(10); //1 argument
// console.log(output)  
