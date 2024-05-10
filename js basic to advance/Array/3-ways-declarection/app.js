
// ----------------- 1. var ----------------------


// var something = 100; //declaration
// something = 200; //reinitialization
// console.log(something);//200
// var something = "samarth"; //redeclaration
// console.log(something);


// ----------------- 2. let ----------------------
// let something = 10; //declaration
// something = 20; //reinitialization
// console.log(something);//20


// let arvind_bhaiya_and_chip = 6;

// arvind_bhaiya_and_chip = true; //reinitialize 

// console.log(arvind_bhaiya_and_chip);


// let arvind_bhaiya_and_chip = 6;

// let arvind_bhaiya_and_chip = true; //redeclare ❌

// console.log(arvind_bhaiya_and_chip);


// ----------------- 3. Const -------------------

// const bhai_ye_kya_horha_hai = 100;

// bhai_ye_kya_horha_hai = "samarth"; //reinitialisation ❌

// console.log(bhai_ye_kya_horha_hai);
//------------------------
// const bhai_ye_kya_horha_hai = 100;

// const bhai_ye_kya_horha_hai = "samarth"; //redeclare ❌

// console.log(bhai_ye_kya_horha_hai);


// -------------------------------------------------------

// ques 1. 

// const samarth; //js engine -> undefined
// samarth = 100; //reinitialise -> ❌
// console.log(samarth);



//q.2
// const person = {
//     username : "kamlesshhh",
//     lang : "nasheeeee"
// }
 // person = {   //error
 //     username : "samarth",
 //     lang : "bhaukalli"
 // };

// person = []   //error

// console.log(person.username)
// console.log(person.lang)

// person.lang = "dun dun dun dun";
// person.age = 26;

// console.log(person.lang)
// console.log(person)

// In JavaScript, when you declare a variable using const, it means that the variable itself cannot be reassigned to a different value or reference. However, it does not mean that the properties of an object declared with const cannot be changed.

// In your code, person is an object, and you are modifying its properties, not the person variable itself. The properties of an object declared with const can be freely changed or updated. So, when you write person.lang = "dun dun dun dun"; and person.age = 26;, you are changing the values of the properties lang and age of the person object. This is allowed and expected behavior when using const with objects.

// The const keyword restricts reassigning the variable person to a different object, but it does not restrict modifications to the object's properties. That's why you can change the values of person.lang and person.age without any error.