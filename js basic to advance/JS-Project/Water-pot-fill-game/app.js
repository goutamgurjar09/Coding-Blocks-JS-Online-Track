let waterPot = document.getElementById('waterpot')
let waterLevel = document.getElementById('waterLevel')
let waterPercentageInput = document.getElementById('waterPercentageInput')


const initialPercentage = 50;

updatePercentage(initialPercentage);
waterPercentageInput.addEventListener('input',function(){
    updatePercentage(this.value);   //The this.value refers to the input value.
})

function updatePercentage(Percentage){
    //console.log(Percentage)
    if(Percentage < 0 || Percentage > 100){
       alert("Please enter a value between 0 and 100")
    }
    Percentage = Math.max(0, Math.min(100 ,Percentage));  //it will calculate the how much Water filled percentage yet-> which is this color-> #f60905;
    
    // Calculate the height of the water level based on the empty percentage
    const height = (100 - Percentage) + "%"
    
    waterLevel.style.height = height;  // This will update the height of the water level which is this color-> #07df0e

    const emptyPersentage = 100 - Percentage;   // This will update the empty percentage/water level
    
    waterLevel.textContent = `Filled:${Percentage}   Empty:${emptyPersentage} `
}





//Math.max(0, Math.min(100, percentage)): Ensures that the percentage is within the valid range (0 to 100).

// Suppose the user inputs a percentage value of 120. 

// First Step (Math.min(100, percentage)):

// It compares 100 with the user input 120 and chooses the smaller value. In this case, it's 100.
// Second Step (Math.max(0, result-of-step-1)):

// It compares the result of the first step (100) with 0 and chooses the larger value. In this case, it's 100.
// So, for the input 120, the validation process would result in percentage = 100. This ensures that the percentage variable doesn't go beyond the maximum valid value of 100


// In the line height = (100 - percentage) + "%";, the height is calculated based on the remaining empty percentage. The variable percentage represents the filled percentage, and 100 - percentage calculates the remaining empty percentage means kitni height remain hai  abi or water fill hone ke liye.

// So, if percentage is 30, then 100 - percentage would be 70, and the resulting height would be "70%". This value is then used to set the CSS height property of the waterLevel element, visually representing the remaining empty percentage in the water pot display.