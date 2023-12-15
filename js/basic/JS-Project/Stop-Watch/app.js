var startbtn = document.querySelector('#start');
var stopbtn = document.querySelector('#stop');
var resetbtn = document.querySelector('#reset');

var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

startbtn.addEventListener('click', () => {
    timer = true;
    stopwatch();
});

stopbtn.addEventListener('click', () => {
    timer = false;
});

resetbtn.addEventListener('click', () => {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('countMili').innerHTML = "00";
});

function stopwatch() {
    if (timer === true) {
        count++;

        if (count === 100) {
            sec++;
            count = 0;
        }
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if (hr < 10) {
            hrString = "0" + hr; //hrString
        }
        if (min < 10) {
            minString = "0" + min;  //minString
        }
        if (sec < 10) {
            secString = "0" + sec;  //secString
        }
        if (count < 10) {
            countString = "0" + count;  //countString
        }

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('countMili').innerHTML = countString;

        setTimeout(stopwatch, 10);
    }
}



// var startbtn = document.querySelector('#start')
// var stopbtn = document.querySelector('#stop')
// var resetbtn = document.querySelector('#reset')



// var hr = 0;
// var min = 0;
// var sec = 0;
// var count = 0; //count/countmilisec jo ki second ka 100 (hundred) path hai means-> 100 milisec./path baad 1 sec. count hoga  vese to 1sec = 1000minisec. hote hai but yha pr 100 tk hi chlega

// var timer = false;  //this var denote ki hmara timer chl rha hai ya stop hai  starting me false mtlb ruka hua hai

// startbtn.addEventListener('click',()=>{
//     timer = true;
//     stopwatch()
// })


// stopbtn.addEventListener('click',()=>{
//     timer = false; 
// })


// resetbtn.addEventListener('click',()=>{
//     timer = false;
//      hr = 0;
//      min = 0;
//      sec = 0;
//      count = 0;

//      document.getElementById('hr').innerHTML = "00"
//      document.getElementById('min').innerHTML = "00"
//      document.getElementById('sec').innerHTML = "00"
//      document.getElementById('countMili').innerHTML ="00"

// })

// //this is main function
// function stopwatch(){
//     if(timer == true){
//         count++;

//         if(count == 100){
//             sec++;
//             count = 0;
//         }
//         if(sec == 60){
//             min++;
//             sec = 0;
//         }
//         if(min == 60){
//             hr++;
//             min = 0;
//             sec = 0;           //bcz 1hr ke baad min or sec  dono 0 hote hai then 1hr hota hai
//         }
   
//      var hrString = hr;
//      var minString = hr;
//      var secString = hr;
//      var countString = hr;

//     if(hr < 10){ 
//         hrString = "0" + hr
//     }
//     if(min < 10){
//         minString = "0" + min
//     }
//     if(sec < 10){
//         secString = "0" + sec
//     }
//     if(count < 10){
//         countString = "0" + count
//     }

//     document.getElementById('hr').innerHTML = hrString
//     document.getElementById('min').innerHTML = minString
//     document.getElementById('sec').innerHTML = secString
//     document.getElementById('countMili').innerHTML = countString
    //    document.getElementById('hr').innerHTML = hr
    //    document.getElementById('min').innerHTML = min
    //    document.getElementById('sec').innerHTML = sec
    //    document.getElementById('countMili').innerHTML = count
       
//     setTimeout(stopwatch,10) //10 milisec baad same fun baar-baar call hoga jb tk con. true hai  because path-> 100 * 10 => 1000mili    =>1sec.
   
//    }
// }