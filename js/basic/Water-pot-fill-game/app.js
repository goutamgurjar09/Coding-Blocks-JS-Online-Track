let waterPot = document.getElementById('waterpot')
let waterLevel = document.getElementById('waterLevel')
let waterPercentageInput = document.getElementById('waterPercentageInput')


const initialPercentage = 50;

 updatePercentage(initialPercentage)
waterPercentageInput.addEventListener('input',function(){
    updatePercentage(this.value)  
})

function updatePercentage(Percentage){
    //console.log(Percentage)
    Percentage = Math.max(0, Math.min(100 ,Percentage)) 
    
    // Calculate the height of the water level based on the empty percentage
    const height = (100 - Percentage) + "%"
     // Update the water level 
     waterLevel.style.height = height;

    const emptyPersentage = 100 - Percentage

    waterLevel.textContent = `Filled:${Percentage}   Empty:${emptyPersentage} `
}


















// Suppose the user inputs a percentage value of 120. The validation ensures that this value is within the valid range of 0 to 100.

// First Step (Math.min(100, percentage)):

// It compares 100 with the user input 120 and chooses the smaller value. In this case, it's 100.
// Second Step (Math.max(0, result-of-step-1)):

// It compares the result of the first step (100) with 0 and chooses the larger value. In this case, it's 100.
// So, for the input 120, the validation process would result in percentage = 100. This ensures that the percentage variable doesn't go beyond the maximum valid value of 100