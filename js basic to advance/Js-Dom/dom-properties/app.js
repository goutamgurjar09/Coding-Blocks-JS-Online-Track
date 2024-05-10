// querySelector
let p = document.querySelector('p')

//innerText -> getter + setter

//console.log(p.innerText)// brainful -> this can read css(aware of the styling) 

//textContent -> getter + setter

//console.log(p.textContent)//brainless -> cannot read css(unaware of the styling)

// innerHTML -> getter + setter
//console.log(p.innerHTML); //brainful -> READS CSS  + shows THE TAGS TOO


// ---------------------------------------------------------
//setter
//p.innerText ="hello i am gurjar"

//p.textContent = "hello i <h1>am bhukaali</h1> baba"

p.innerHTML = "hello  <h1>i am bhukaali</h1> baba"







// const parentele = document.getElementById('parent')
// console.log(parentele)

// const getchild = document.getElementsByClassName('sam')
// console.log(getchild)
// console.log(getchild[1].innerHTML ='This is our heading2')
// getchild[0].style.color = 'blue'
