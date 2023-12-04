//appendChild and append both methods are append element in the last after first element

let section = document.querySelector('section');

// appendChild()

let h1 = document.createElement('h1')
let p = document.createElement('p')
//console.log(h2) //<h1></h1>

h1.innerText = 'goutam'
p.innerText = 'ranvey'

//section.appendChild(h2) 
//section.appendChild(p) 

//section.appendChild(h2,p)  //wrong -> mutliple

//section.appendChild("hi") //wrong -> string


//append() -> you can add mutiple and string also accepted

 section.append(h1)
// section.append(h1,p)//right
// section.append("this is dom") //right
// section.append(`<h1>hello from chamakadh</h1>`) 


//PTR-1 ->always remember  ek ELEMENT ya to append hoga ya fir prepend dono ek saath nhi ho sakta

//--------------------

//prepend() ->  starting mei add-> start -> multiple -> string 

//section.prepend(`<h1>hello from chamakadh</h1>`)
// section.prepend(p,h1) //yes

section.prepend(p) //add last
section.prepend(h1) // add start

//----------------

section.before(h1)

section.after(p)



