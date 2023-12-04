
let div = document.querySelector('div');


// 1. children
//  console.log(div)
//  console.log(div.children) //HTMLCollection(2) [h1, h5]
//  console.log(div.children[0])
//  console.log(div.children[1])

 //--------------------
  let art = document.querySelector('article');


//  console.log(art)
//  console.log(art.children) //HTMLCollection [div]
//  console.log(div.children[0].children[0].children[0])


 //-----------------------

//2.parent

// console.log(div.parentElement)

// console.log(div.parentElement.parentElement)

// console.log(div.parentElement.parentElement.parentElement.parentElement)//html

// console.log(div.parentElement.parentElement.parentElement.parentElement.parentElement)//null


// -----------------

console.log(art.nextElementSibling)

console.log(art.nextElementSibling.nextElementSibling)

console.log(art.nextElementSibling.nextElementSibling.previousElementSibling)