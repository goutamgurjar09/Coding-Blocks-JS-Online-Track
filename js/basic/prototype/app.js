// let todo = {
//     title: "therapist",
//     disc: function(){
//         return `you haave to go ${todo.title}`
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

let str = "samarth can dance sala";

console.log(str);

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