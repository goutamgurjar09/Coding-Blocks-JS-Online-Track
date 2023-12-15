//const accountId = 12345;
//accountId = 12; not allowed
//console.log(accountId);
// var email = "g@gmail.com";
// email = "k@gmail.com"
// accountCity = "jaipur";
//accountCity = "bangluru"
//console.log(email);

// let password = 3953;
// password = 1375;
// console.log(password);
// let name;  // undefined   
// console.table([password,email,accountId,accountCity,name]);

//pls prefer use let not var bcz the problem are block and function scope

//path for run js program pls change evry time file name when you create new file
//node .devcontainer/basic/04_operation.js

//let num = 20;
//console.log(num);
//-------strings------
//Way-1
// let fName = 'goutam'
// let lastName = 'gurjar'
//  let space = ' '
// console.log(fName,lastName,space);//goutam gurjar

//Way-2
// let fName = "goutam"
// let lastName = "gurjar"
// let space = " "
// console.log(fName,space,lastName);//goutam gurjar

//Way-3
// let fName = `goutam`
// let lastName = `gurjar`
// let space = ` `
// console.log(fName,space,lastName);//goutam gurjar

// ------------------------
// string concatination (concat) -> +
// console.log(fName + lastName)
// console.log(fName + space + lastName)
// console.log(fName + ' ' + lastName)
// console.log(fName + " " + lastName)
// console.log(fName + ` ` + lastName)

// ----------------------------------

//let houseName = 'goutam gurjar's house'//you cant use single quote inside single quote
//let houseName = 'goutam gurjar"s house'//it's work fine
// let houseName = "goutam ranvey's house"//right
// houseName = "goutam ranvey/s house"//right
// houseName = "goutam ranvey/'s house"//right
// console.log(houseName)

//let barish = 'hogi\nNot'
// let barish = "hogi\nNot"
// let barish = "hogi" + "\n" + 'Not'
//let barish = 'hogi + \n + Not'//hogi +
                                //  + Not
//let barish = 'hogi + "\n" + Not'//hogi + "
                                //" + Not
//let barish = 'hogi + '\n' + Not'//wrong
//let barish = 'hogi , \n , Not'//hogi , 
                             //, Not
//console.log(barish)

let firstname = 'punit '
let lastname = 'gurjar '
let state = 'mp'
let favLang = 'english'
 
//let greetings = "kaise ho bhai " + firstname + lastname + " and where are you from " + state + " and what is your fav lenguage " + favLang
//let greetings2 = `kaise ho bhai  ${firstname}  ${lastname} and where are you from ${state} and what is your fav lenguage ${favLang}`
//console.log(greetings2);
// console.log(firstname)
// console.log(lastname)
// console.log(state)
// console.log(favLang)


