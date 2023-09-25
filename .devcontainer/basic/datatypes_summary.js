//1.) Premitive 
//7 types
//Number,Boolean,String,null,undefined,Symbol,BigInt

// const score = 100;
// const scoreVal = 100.5;
// const isLoggin = false;
// const outSideTemp = null;
// let userEmail;
//console.log(typeof outSideTemp);object

//  const id =Symbol('123');
// // const anotherId = ('123')//both id are different
// // console.log(id === anotherId);//false
// console.log(typeof id);//Symbol

// // const bigNumber = 2563478297834878n; //bigint number
// // console.log(typeof bigNumber);//bigInt

// //2.) Reference (Non-Premitive)
// //Array,objects,function

// //array
//  const arr = ['a','big','c','dog']
//  console.log(typeof arr);
//  console.log(arr[0])


//  //object
//  let person = {
//     name : "gotam",//`goutam`
//     course : "bca",
//     age : 23
//  }
//  console.log(person)
//  //console.log(person.age)


// //function
// //yha hmne function name isliye use nhi kiya bcz hm function ko variable me pass kr rhe to hme usse call kr skte hai
// const myFun = function (){ 
//     console.log("hello goutam");
// }
// console.log(typeof myFun);//function,   but basically ise object function hi bola jata hai
// myFun()


//++++++++++++++++++++++++++++++++--------------------------++++++++++++++++++++++++++++++++

//let's Talk about Memory in js

//there are two types of memory in js 1.Stack 2.Heap

//Stack is use for Primitive datatypes and Heap is use for Non-Primitive datatypes

//Stack-> jb bhi stack memory use hoti hai tb jo bi aapne variable declare kiya uski ek copy milti hai but isme jo bhi value change anotherVariable me krte hai usse first variable ki value changes nhi hoti bcz yha variable ki copy bnti hai
//Heap-> jb bhi Heap memory use hoti hai tb hme ek Reference milta hai orignal value ka means jo bhi change krege bo orignal value me change hoga

//ex:-for stack memory
let myName = "goutam"
let anotherName = myName
console.log(anotherName)//goutam
anotherName = "gurjar"
console.log(myName)
console.log(anotherName)//gurjar

//ex: for Heap memory 
let userOne ={
   email:"g@gmail.com",
   id : 1
}
let userTwo = userOne;
userTwo.email = ("goutam@gmail.com");//now both have same value
console.log(userOne.email)
console.log(userTwo.email)