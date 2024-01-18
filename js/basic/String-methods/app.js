let str = "goutam gurjar"
console.log(str);

// 1. length (property) -> no need to call
// let len = str.length;
// console.log(len)//13
// console.log(str.length);//13

//console.log(str.length()) //wrong//str.length is not a function


//-------------------------
//Methods 

//1. toUpperCase() -> need to call it
// console.log(str.toUpperCase())//GOUTAM GURJAR

//2. toLowerCase()
//console.log(str.toLowerCase())//goutam gurjar

// let ans = str.toUpperCase();
// console.log(str.toUpperCase());//GOUTAM GURJAR
// console.log(ans);//GOUTAM GURJAR

//3. trim()->Removes the leading and trailing white space and line terminator characters from a string. 
 let s = "    goutam gurjar   "

//console.log(s)//    goutam gurjar
// console.log(s.length);//20
// let trimStr = s.trim(); 
// console.log(trimStr);//goutam gurjar
//console.log(trimStr.length);//13

//console.log(s.trim())//goutam gurjar
//console.log(s.trim().length)//13 after trim



//5. includes() ->returns boolean value

//let ans =str.includes('m');//true
//let ans =str.includes('p');//false
// let ans =str.includes(' ');//true
//let ans =str.includes("");//true
// let ans = str.includes(" ")//true

//let ans = str.includes(" Mave ")//false
//let ans = str.includes(" gout ")//false bcz you didn't use whitespace
// let ans = str.includes("gout")//true

//let ans = str.includes("G")//false
// let ans = str.includes(" gout")//false


//console.log(ans); 



//Note:- In your code, str.includes("") is returning true because you are checking if the string str includes an empty string "". An empty string is a substring of any string, including itself.

// When you use the includes method with an empty string as an argument, it checks whether the given string contains the specified substring, which, in this case, is an empty string. Since every string contains an empty string (as it's essentially a part of itself), the method returns true



// ------------------------------------------

// -------CHAINING OF METHODS AND PROPETIES----
 //let ans = s.trim()
 //let ans = s.trim().length; //yes
 //let ans = s.trim().toUpperCase().length//yes 

 //console.log(ans); 

 