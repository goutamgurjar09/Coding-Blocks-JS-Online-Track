// length -> Not possible 

// let num = 99;
// console.log(num.length)//undef.
// console.log(num.length())//error num.length is not a function

//----------------

// Math is an object so i can use dot notation
// console.log(Math)//Object [Math] {}->iske pass bhot sare methods hai

// // properties of math object

// console.log(Math.LN2); //0.69
// console.log(Math.LN10);//2.30
// console.log(Math.LOG2E);//1.44
// console.log(Math.LOG10E);//0.434
// console.log(Math.PI);//3.14
// console.log(Math.SQRT1_2)//0.707
// console.log(Math.SQRT2)//1.414

// You've listed several mathematical constants, and each of them has a specific value and purpose:

// LN2: The natural logarithm of 2, approximately 0.6931471805599453. It's often used in logarithmic calculations.

// LN10: The natural logarithm of 10, approximately 2.302585092994046. Useful for logarithmic calculations involving base 10.

// LOG2E: The logarithm of the constant "e" to the base 2, approximately 1.4426950408889634. Useful in logarithmic calculations involving base 2.

// LOG10E: The logarithm of the constant "e" to the base 10, approximately 0.4342944819032518. Useful in logarithmic calculations involving base 10.

// PI: The mathematical constant Pi (π), approximately 3.141592653589793. Used in various mathematical and geometric calculations, such as calculating the circumference of a circle.

// SQRT1_2: The square root of 1/2, approximately 0.7071067811865476. Useful in certain mathematical operations.

// SQRT2: The square root of 2, approximately 1.4142135623730951. Commonly used in geometric and mathematical calculations.



// Methods of math object

//  console.log(Math.ceil(4.3)); //5
//  console.log(Math.pow(2,4)); //16
//  console.log(Math.floor(4.3));//4

// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.8)); //5
// console.log(Math.round(4.5)); //5

// console.log(Math.random());//give random num between 0 to 1
// console.log(Math.random() * 10); //give floor num 0 - 9

// console.log (Math.floor(Math.random() * 1000));//give num 0 - 1000 


//console.log (Math.floor((Math.random() * 95) + 5 ))//return num 5 - 99->  (100) but last exclusive 

//console.log (Math.floor(Math.random() * 100));// 0 - 100

// OTP
// console.log(Math.floor(Math.random() * 9000) + 1000)//1000 - 9999

//1000 to 9000 + 1000=>10000 but last num exclusive thatswhy 
//it returns num between 1000 to 9999 

// The code console.log(Math.floor(Math.random() * 9000) + 1000) generates a random integer between 1000 and 9999 (inclusive) and prints it to the console. Let me break down the code step by step:

// Math.random(): This generates a random floating-point number between 0 (inclusive) and 1 (exclusive). In other words, it generates a random decimal value in the range [0, 1).

// Math.floor(...): This function is used to round down the random decimal value to the nearest integer. It effectively removes the decimal part, leaving only the whole number.

// Math.random() * 9000: This part generates a random decimal value in the range [0, 9000). So, it's a random number between 0 (inclusive) and 9000 (exclusive).

// Math.floor(Math.random() * 9000): This calculates a random integer between 0 and 8999.

// Finally, we add 1000 to the generated random integer. This ensures that the number is between 1000 and 9999 instead of 0 and 8999.

// So, when you run this code, it will print a random four-digit number (between 1000 and 9999) to the console. 