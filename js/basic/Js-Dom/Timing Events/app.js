// its a time based events
//the window object allows us to execution of code at a specific time intervels this time intervelsare called timing events
//the two key methods to use with js are-> setTimeout(),setInterval() and clearIntervel()

//1. setTimeout() : methods sets a timer which executes a function or piece of code once the timer expires

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

let stopbtn = document.querySelector('#btnTwo')

let num = 0;
let timeRefrence;
btn.addEventListener('click',()=>{
    p.innerHTML =`Loading data........`  
    timeRefrence = setInterval(() => {
        p.innerHTML =`hy your lucky number is it-> ${num} `   
        num++;
    }, 1000);
});

stopbtn.addEventListener('click',()=>{
    clearInterval(timeRefrence) //stop the timer when click stopbtn  and  Clear the interval using the stored reference
    p.innerHTML += 'Interval stopped'
});



//-------------------
// timeRef is a variable used to store the reference to the interval timer returned by setInterval. This reference is later used with clearInterval to stop the interval when needed.

// In your code:

// let timeRef;
// This line declares a variable named timeRef. The purpose of this variable is to hold the reference to the interval timer so that you can clear the interval later using clearInterval.



//-------Wrong way-------------

//stopBtn.addEventListener('click', () => {
    // Clear the interval without using a stored reference but this is not work
//    clearInterval();// when you dont use the ref variable till then this will not work
//    p.innerHTML = 'Interval stopped';
//});
