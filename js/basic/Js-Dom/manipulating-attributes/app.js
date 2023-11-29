let div = document.querySelector('#box')
div.style.backgroundColor = "red"
div.textContent = "hy goutam "


// getAttribute -> getter

//let div = document.querySelector('#box')
//console.log(div.getAttribute('id'))

// let id = div.getAttribute('id')
// console.log(id)

// let name = div.getAttribute('name')
// console.log(name)




let a = document.querySelector('a')
// console.log(a)
//console.log(a.getAttribute('href'))

//---------------------

let inp = document.querySelector('input')
// console.log(inp)
//console.log(inp.getAttribute('type'))

//----------------------

// setAttribute -> setter

a.setAttribute('href', 'http://facebook.com') //1st-> jisko , 2nd -> jiss value se change

inp.setAttribute('type' , 'date')
inp.setAttribute('type' , 'color')
inp.setAttribute('type' , 'checkbox')

