//1. call:
//The call method is used to invoke a function with a specified this value and arguments provided individually

function greet(name){
    console.log(`hello ${name}, and your age is ${this.age}`);
}
let person = {
    age : 20
}
greet.call(person,"kanu sir");  // value->kanu sir


function fun(name){
    console.log('hello ' + name + ' and your age is ' + this.age +" "+ this.name);
}
fun.call({age:20,name:"Anshika"},"goutam");

//In this example, the call method is used to invoke the greet function with the person object as the this value.


//-------------------------------
//Apply - The apply method is similar to call, but it accepts arguments as an array.

// function fun(a , b){
//     console.log(`Sum is  ${a + b}. and your age is ${this.age}`);
   
// }
// let person1 = {
//     age : 20
// }
// fun.apply(person1,[10,5]); 
//In this example, the apply method is used to invoke the sum function with the person2 object as the this value and the numbers array as arguments.


//-----------------------
//bind:-
//The bind method creates a new function with the same body as the original function but with a fixed this value.

// function printInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
// }

// let user = {
//     name: 'Alice',
//     age: 28
// };

// let boundFunction = printInfo.bind(user);
// boundFunction();

//In this example, bind is used to create a new function boundFunction where this is permanently set to the user object.



//-------------------
//In this case, it will print the [String: 'goutam'] because the call method explicitly sets this  argument to the this keyword to its first argument inside the fun this keyword refers to global object .
function fun1(){
    console.log(this);
}
//fun1()
//fun1.call("goutam");
