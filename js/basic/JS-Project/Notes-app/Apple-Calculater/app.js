// let input = document.querySelector('input')
// let btn =  document.querySelectorAll('button')

// btn.forEach(function(button){
//     button.addEventListener('click',function(e){
//         // console.log(e)
//         // Append the value of the button to the input field
//         //input.value += button.textContent;

//         if(button.textContent === '='){
//             // Evaluate the expression and display the result in the input field
//             input.value = eval(input.value);
            
//         }
//         if(button.textContent === 'C'){
//            // Clear the input field
//            input.value = '';
//         }
//         else{
//             // Append the value of the button to the input field
//             input.value += button.textContent; 
//         }
        
//     })
// })


let input = document.querySelector('input');
let btn = document.querySelectorAll('button');
let result = ''; // To store the evaluated result

btn.forEach(function (button) {
  button.addEventListener('click', function () {
    if (button.textContent === '=') {
      // Evaluate the expression and store the result in 'result'
      result = eval(input.value);
    } else if (button.textContent === 'C') {
      // Clear the input field
      input.value = '';
      result = ''; // Clear the result
    } else {
      // Append the value of the button to the input field
      input.value += button.textContent;
    }

    // Display the result in the input field if result contains finalresult
    if (result !== '') {
      input.value = result;
    }
  });
});


//Note->Click the "=" button. The code evaluates the expression "12+4" using eval, and the result (16) is stored in the result variable. The input field now displays "16".

//bcz eval fun returns ->console.log(eval("2 + 2"));
//output: 4