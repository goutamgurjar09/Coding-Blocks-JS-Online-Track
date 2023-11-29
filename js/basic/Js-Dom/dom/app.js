// using js manipulate html
// selectors

//id
//class
//element selector/tagname

//document -> html mei se select kro is-is way se


// way-1 -> getElementById

// let elem = document.getElementById(samarth);//h2 -> NO this is wrong way
// let elem = document.getElementById("samarth");//h1 -> YES
//only returns 1 single entity -> 1st occurance

//note: if id not given then it returns null
// let elem = document.getElementById("th");
// console.log(elem)//null

// ------------------------------------------------
// styling...

// alag alag same element par properties provide karna

//let heading = document.getElementById('samarth')
//console.log(heading)
// console.log(heading.style.color = 'red')

// heading.style.fontSize = "50px"
// heading.style.background = "yellow"
// heading.style.border = "5px solid black";

//---------------------------------------

//ek saath element pr properties apply karna

// heading.style.cssText = `
//   color:purple;
//   background:yellow;

// `

// -----------------------------------------------------

// way-2 -> getElementsByclassName -> return an array(html collection)

let classEle = document.getElementsByClassName('sam'); //array -> looping

//console.log(classEle)

// for(let i=0; i<classEle.length; i++){
//     classEle[i].innerHTML =`This is inner html ${i}` 
// }

// for(let ele of classEle){
//     //console.log(ele)
//     ele.style.background = "coral"
// }

//-------------------------------------------------------

// way-3 -> getElementsByTagName -> return an array(html collection) same as getElementsByClassName

//let TagEle = document.getElementsByTagName('hr');//returns an empty array-> HTMLCollection []

// let TagEle = document.getElementsByTagName('p');
// //console.log(TagEle)

// for(let ele of TagEle){
//     console.log(ele)
//     //ele.style.border = "3px solid black"
//     ele.style.backgroundColor = "orange";
// }

// for(let ele of TagEle){
//     ele.style.cssText = `
//       color : red;
//       font-size : 30px;
//     `
// }

//----------------------------------------------------

// //way-4 -> querySelector -> 3 in 1 kaam krta hai -> only 1 element ko select krta hai

// //id ->

// let ele = document.querySelector('#samarth')//single possible
// console.log(ele)
// //class ->

// let classele = document.querySelector('.sam')
// console.log(classele)

// //tagname ->

// let tagele = document.querySelector('p')//single possible
// console.log(tagele)


// ---------------------------------------------------------

//way-5 -> querySelectorAll -> 3 in 1 kaam krta hai -> all element ko select krta hai

//id ->

 let ele = document.querySelectorAll('#samarth')// selects All
// console.log(ele)
console.log(ele[0].innerHTML = 'This is p')

//class ->

// let classele = document.querySelectorAll('.sam')//single possible
// console.log(classele)

 //tagname ->

// let tagele = document.querySelectorAll('p')//single possible
// console.log(tagele)

