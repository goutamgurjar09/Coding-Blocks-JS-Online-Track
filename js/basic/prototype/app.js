


// let todo = {
//     title: "therapist",
//     disc: function(){
//         return `you have to go ${todo.title}`
//       //  return `you have to go to ${this.title}`
//     }
// }
// console.log(todo.disc())

// console.log(todo.title)//therapist

// console.log(todo.goutam)//undefined

// //console.log(todo.samarth());//error

// console.log(todo);

//open console and check it 
// todo.__proto__ == Object.prototype
// true
// todo.__proto__.__proto__ == Object.prototype
// false
// todo.__proto__.__proto__ == null
// true


//Note:in JS every function and object has its own property called prototype
// a prototype itself is  also another object. so the prototype has its own prototype and this creates a prototype chain means prototypes ke ander bhi prototypes hai
// -----------------------------------------

// let arr = ["my" , "name" , "is" , "samarth"];
// console.log(arr);

// arr.__proto__==Object.prototype
// false
// arr.__proto__==Array.prototype
// true
// arr.__proto__.__proto__==Array.prototype
// false
// arr.__proto__.__proto__== null
// false
// arr.__proto__.__proto__== Object.prototype
// true
// arr.__proto__.__proto__.__proto__== null
// true


// --------------------------------------

// let str = "samarth can dance sala";

// console.log(str);

// str.__proto__ == Object.prototype
// false
// str.__proto__ == String.prototype
// true
// str.__proto__.__proto__ == String.prototype
// false
// str.__proto__.__proto__ == Object.prototype
// true
// str.__proto__.__proto__.__proto__ == null
// true


//---------------------------

//prototype inheritence
//Note: we can use prototype to add properties and methods  to a constructor function

//and object inherits the properties and methods from a prototype

//----------------------------
//ex-its  a constructor function generally isko inside the class create krte hai

//to add the object properties using prototypes in the constructor function

// function Person(Fname,Lname){
//     this.fname = Fname
//     this.lname = Lname
// }
//i want to add one more properties in the constructor function using prototypes bcz without prototype you can't add properties directely in consructor function means ek baar properties add/declare krne ke baad add nhi kr skte

// Person.prototype.gender = "Male";  //add the properties in the cons. fun using prototype

// const Person1Obj = new Person("Raaj", "gurjar")
// const Person2Obj = new Person("Bill", "gates")

//console.log(Person1Obj) //open console and expend the object and also expend prototype

//output
// Person {fname: 'Raaj', lname: 'gurjar'}
// fname: "Raaj"
// lname: "gurjar"
// [[Prototype]]: Object
// gender: "Male"
// constructor: ƒ Person(Fname,Lname) //inside the cons.
// arguments: null
// caller: null
// length: 2
// name: "Person"
// prototype: {gender: 'Male', constructor: ƒ} //see here 

// console.log(Person1Obj.gender)//Male     bcz the Person1Obj and  Person2Obj is inherited the properties of  ->(Person.prototype.gender = "Male";)-> person construstor function ki
// console.log(Person2Obj.gender)//Male


//---------------------------
//how to add the methods using prototypes in the constructor function

function Person(Fname,Lname){
    this.fname = Fname
    this.lname = Lname
}
//i want to add one more method in the constructor function using prototypes bcz without prototype you can't add properties in consructor function means ek baar add/declare krne ke baad add nhi kr skte

Person.prototype.getFullName = function(){ //add the methods in the cons. fun using prototype
    return `${this.fname} ${this.lname}`  //access the properties of cons. fun
};

const Person1Obj = new Person("Raaj", "gurjar")
const Person2Obj = new Person("Bill", "gates")

//console.log(Person1Obj) //open console and expend the object and also expend prototype it inherites/access the getFullName method
console.log(Person1Obj.getFullName()) //Raaj gurjar
console.log(Person2Obj.getFullName())//Bill gates



//proptype chaining value and how to change the properties value

function Pname(){
    this.fullname = "goutam gurjar"
}
Pname.prototype.age = 25;

const PnameObj1 = new Pname("lala", "gurjar")//it will override value and print only goutam gurjar 

Pname.prototype = {age:50};  //change the value


const PnameObj2 = new Pname()
// console.log(PnameObj1.age)
// console.log(PnameObj2.age)
console.log(PnameObj1.age) //25
console.log(PnameObj2.age) //50


