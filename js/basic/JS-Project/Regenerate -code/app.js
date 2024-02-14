let input = document.getElementById('input');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

//let prevInput = '';   
let previousResponse = ''; //first time no value in input field so return empty string

btn1.addEventListener('click', function () {
    previousResponse = input.value;
    console.log(`first print prevRes ->: ${previousResponse}`);
    input.value = '';
    
});
btn2.addEventListener('click', function () {
   // console.log(previousResponse);
    document.getElementById('code').innerText = ` prevRes ->: ${previousResponse}`
})
