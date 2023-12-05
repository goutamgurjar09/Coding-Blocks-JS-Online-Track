//event- is basically an action that happens on the document jiske hone pr/corrousponding kuch reaction/ task perform kr skte ho

//ex- jaise ghr me achanak  aag lg  jana ek parakar ka event/action hai  and isko aap pani se bujhaoge that is a reaction/task which you perform


//how to handle the event
//there are two ways  
//1.using inline handling -> onclick="console.log('click me')  
//2. using js-> btn.onclick = ()=>{....}



let btn = document.querySelector('#btn1')
let div = document.querySelector('.one')

// btn.onclick = ()=>{
//    console.log("btn1 was clicked")
//    let a =  24;
//    a++;
//    console.log(a)
// }


// div.onmouseover = ()=>{
//     console.log("Handler1")
// }

// div.onmouseover = ()=>{
//     console.log("Handler2")
// }

//Note:-ydi aapne ek event ko phle se handle kr liya to aap ise baar baar handle nhi kr skte  esa krne pr first bala code override ho jayega



//event object //->e

// btn.onclick = (e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)
// }

//------------------

//> how many ways can we listen to this event /listen means us event pr kuch task perform krna total- 3 ways

//1. adEvnetListener (event , callback)      ->handler
//2. removeEvnetListener (event , callback)  

//jaise hi ye event(like->click,mouseover etc) occur hoga vase hi callback function execute ho jayega or is function ke ander jo bhi statement likha hoga bo execute ho jayega ise callback fun ko event handler bhi bolte hai jo ki basically event ko handle krega
//Note: EvnetListener ke through hm multiple kaam ek sath krwa skte hai


// btn.addEventListener('click',(e)=>{
//     console.log("btn1  clicked")
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
// })

// btn.addEventListener('click',()=>{
//     console.log("btn1 already clicked handler-2")
// })

//note:ye dono EventListener trigger honge


btn.addEventListener('click',(e)=>{
    console.log("btn1  clicked handler-1")
    
})

btn.addEventListener('click',()=>{
    console.log("btn1  clicked handler-2")
})
// btn.addEventListener('click',()=>{
//     console.log("btn1  clicked handler-3") //wrong way to remove you have to pass the fun to a variable then this variable ko apko  removeEventListener me as a reference pass krna hai
// })
const handler3 = ()=>{
    console.log("btn1  clicked handler-3")
}
btn.addEventListener('click',handler3)

btn.addEventListener('click',()=>{
    console.log("btn1  clicked handler-4")
})

//and now i want to remove third  EventListener handler-3 then we will use removeEventListener()

// btn.removeEventListener('click',()=>{
//     console.log("btn1  clicked handler-3")  //wrong not remove
// })

 btn.removeEventListener('click',handler3)

//Note: the callback reference(variable) should be same to remove





//lets create a toggle btn that changes the screen light-mode to dark-mode and dark-mode to light-mode


// let newbtn = document.querySelector('#mode')
// let documentbody = document.querySelector('body')
// let currmode = "light"

// newbtn.addEventListener('click',()=>{
   
   
//     if(currmode === "light"){
//         //console.log("btn1 1-time clicked")
//         currmode = "dark"
//         documentbody.style.backgroundColor = "black"
//     }
//     else{
//        // console.log("btn1 2-time clicked")
//         currmode = "light"
//         documentbody.style.backgroundColor = "white"
//     }
//     console.log(currmode)

// })


//using class to perform this operation

let newbtn = document.querySelector('.mode')
let documentbody = document.querySelector('body')

let currmode = "light"
newbtn.addEventListener('click',(e)=>{
    if(currmode ===  "light"){
        currmode = "dark"
        documentbody.classList.add('dark')  
        documentbody.classList.remove('light')   
 
       
    }else{
        currmode = "light"
        documentbody.classList.add('light')  
        documentbody.classList.remove('dark')     
    }
    console.log(currmode)
})

