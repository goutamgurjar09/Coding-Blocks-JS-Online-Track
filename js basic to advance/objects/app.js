// let todo = {
  // properties => key : value
//};
// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

//
// let todo = {
//     name : "goutam",
//     completed : false ,
//     5 : true,
//     age : 23
// }
//console.log(todo)//{ name: 'goutam', age: 23 }
//console.log(todo[5])//true
//console.log(todo['completed'])//bcz key is string in object
//console.log(todo['5'])//true

// 1. never use numbers as keys
// 2. donot start with numbers
// 3. BTS(behined the scene) the key are stored as string and can be accessible like array but using a string only. //exception -> numbers
// bcz BTS object me key-value  store hoti hai same like array ke jaise
// 4. do we access objects like this way -> ❌
// 5. we always use dot notation (.) 


//-----------------------
//using DOT notation

let todo = {
    title : "buy chocolate" , //comma seperation
    completed : false ,
    ande : "nahi khae" ,
    mickeymouses : 100 
}
// console.log(todo['title'])//yes bcz can be accessible like array
// console.log(todo.name)//undefined
// console.log(todo.completed)
// console.log(todo.ande)

//console.log(todo.mickeymouses) //getter
//todo.kanu = 22//setter
//console.log(todo)
// {
//     title: 'buy chocolate',
//     completed: false,      
//     ande: 'nahi khae',
//     mickeymouses: 100,
//     kanu: 22
//   }

// todo['completed'] = 'hello'//setter/change the value
// todo.mickeymouses = 'g'//setter
// console.log(todo.completed)//hello
// console.log(todo.mickeymouses )//g

// console.log(typeof(todo));//object


//------wrong ways----------

// console.log(todo[0])//undefined

// console.log(todo['1']);//undefined
// console.log(todo.0)