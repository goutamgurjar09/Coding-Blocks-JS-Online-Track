// its a time based events
//the window object allows us to execution of code at a specific time intervels this time intervels are called timing events
//the two key methods to use with js are-> setTimeout(),setInterval() and clearIntervel()

//1. setTimeout() :its a browser webApi   that sets a timer which executes a function or piece of code once the timer expires

//2. setInterval() : methods, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call
//the setInterval() methodh will continue calling the function untill clearInterval() is called or the window is closed. the ID value rturned by
//setInterval is used as the parameter for the clearInterval() method

//3. clearInterval() :methods stops the execution of the function specified in the setInterval() method



let p = document.querySelector('#para')
let startbtn = document.querySelector('#btn')

//1st way
// startbtn.addEventListener('click',()=>{
//     p.innerHTML =`Loading data........`  
//     setTimeout(function(){
//         p.innerHTML =`hy this is goutam gurjar`   
//     }, 1000)
// });

//--------------------
//2nd way

// startbtn.addEventListener('click',setTimer)

// function setTimer(){
//     p.innerHTML =`Loading data........`  
//     setTimeout(function(){
//         p.innerHTML =`hy this is goutam gurjar`   
//     }, 1000) //1000 miliseconds = 1 second
// }

//---------------------
// let num = 0;
// startbtn.addEventListener('click',()=>{
//     p.innerHTML =`Loading data........`  
//     setInterval(() => {
//         p.innerHTML =`hy your lucky number is it-> ${num} `   
//         num++;
//     }, 1000);
// });



//---------------------

// let stopbtn = document.querySelector('#btnTwo')

// let num = 0;
// let timeRefrence;//id
// btn.addEventListener('click',()=>{
//     p.innerHTML =`Loading data........`  
//     timeRefrence = setInterval(() => {
//         p.innerHTML =`hy your lucky number is it-> ${num} `   
//         num++;
//     }, 1000);
// });


// stopbtn.addEventListener('click',()=>{
//     clearInterval(timeRefrence) //stop the timer when click stopbtn  and  Clear the interval using the stored reference
//     p.innerHTML += 'Interval stopped'
// });



//-------------------
// timeRef is a variable/id used to store the reference to the interval timer returned by setInterval. This reference is later used with clearInterval to stop the interval when needed.

// In your code:

// let timeRef/id;
// This line declares a variable named timeRef. The purpose of this variable is to hold the reference to the interval timer so that you can clear the interval later using clearInterval.



//-------Wrong way-------------

//stopBtn.addEventListener('click', () => {
    // Clear the interval without using a stored reference but this is not work
//    clearInterval();// when you dont use the ref variable till then this will not work
//    p.innerHTML = 'Interval stopped';
//});


//-----------------------
//ye every 3 sec. me baar baar call hoga and  task print krega and setInterval() Infinite time chlta rhega jb tk usko rokege nhi

// setInterval(function a(){
//   console.log("this is setInterval and it will execute after 3 seconds")
// },3000)



// setInterval(function(){
//     console.log("this is setInterval and it will execute every 3 seconds again and again")
// },3000)


//-------------------------
// let idRef = setInterval(function(){
//     console.log("this is setInterval and it will not  execute every 3 seconds again and again")
// },2000)


//  setInterval(function(){
//      clearInterval(idRef)
// },10000)
//it will execute the code 5 times every 2 sec.


//---------------------
// let Idddd = setInterval(function(){ //imp
//     console.log("hi i am swaggy")
// } , 2000)


// setTimeout(function(){
//     clearInterval(Idddd); //imp 
// } , 4000)

//it will execute the code 2 times every 2 sec.


//-------------------
let Id = setInterval(function(){ //imp
    console.log("hi i am swaggy")
} , 3000)


setTimeout(function(){
    clearInterval(Id); //imp 
} , 30000)
//30000ms = 30s means ye fun every 3s me call hoga and 30s tk chlega then stop hoga means totaol 10 times->hi i am swaggy print hoga



//it will execute the code 4 times every 1 sec.


//NOTE: setInterval returns an ID  and hme ydi function execution  ko stop krna hai to hm clearInterval ka use krege
//and uske under is ID ko pass kr denge clearInterval(ID) jisse setInterval stop ho jayega