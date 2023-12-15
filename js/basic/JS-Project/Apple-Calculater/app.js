let input = document.querySelector('input');
let btn = document.querySelectorAll('button');
let result = ''; // To store the evaluated result


btn.forEach(function (button) {
  button.addEventListener('click', function () {


    if (button.textContent === '=') {
      // Evaluate the expression and store the result in 'result'
      result = eval(input.value);
      input.value = result;
    } else if (button.textContent === 'C') {
      // Clear one character at a time in the input field
      input.value = input.value.slice(0, -1);
      //input.value = Math.floor(input.value / 10);
      
    }
    else if(button.textContent === 'AC'){
      input.value = '';
      result = ''; 
    }
    else {
      // Append the value of the button to the input field
      input.value += button.textContent;
    }

    // Display the result in the input field if result contains finalresult
    // if (result !== '') {
    //   input.value = result;
    // }
  });
});


//Note->Click the "=" button. The code evaluates the expression "12+4" using eval, and the result (16) is stored in the result variable. The input field now displays "16".

//bcz eval fun returns ->console.log(eval("2 + 2"));
//output: 4


//2.using array.foreach

// let input = document.getElementById('input');
// let buttons = document.querySelectorAll('button');
// let string = "";

// let arr = Array.from(buttons);
// arr.forEach(buttons => {
//     buttons.addEventListener('click', (e) => {

//         if (e.target.innerHTML == '=') {
//             string = eval(string);
//             input.value = string;
//         }

//         else if (e.target.innerHTML == 'AC') {
//             string = "";
//             input.value = string;
//         }
//         else if (e.target.innerHTML == 'C') {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         }

//         else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }


//     })
// })