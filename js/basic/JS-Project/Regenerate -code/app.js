const btn = document.getElementById('btn');
let prevInput = '';   //first time no value in input field 

btn.addEventListener('click', function () {
    let previousResponse = prevInput;
    console.log(`first print prevRes ->: ${previousResponse}`);
    
    document.getElementById('code').innerText = `first print prevRes ->: ${previousResponse}`; // Corrected variable name
    prevInput = document.getElementById('input').value;  //then print update current input value
});
