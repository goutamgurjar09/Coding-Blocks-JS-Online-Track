
let select = document.querySelector('#select')
let divEle = document.querySelectorAll('.one')
//console.log(DivEle) //its an array/Nodelist
  


select.addEventListener('change',()=>{
   const selectOption = select.selectedOptions[0]   //select the option 
   //console.log(selectOption)           //it will give the whole selected option
   let selectValue = selectOption.value
   //console.log(selectValue)            //it will give the selected option attribute value
   let selectContent = selectOption.textContent  //it will give the selected option text content
 

//   console.log(selectValue)     //get the option value
//   console.log(selectContent)    //get the option text/content

//to show option text in the div based on which value you are-> selectValue
// divEle[selectValue - 1].textContent = selectContent   //selectValue= 1,2,3,4  and arr start with 0 to 3 index that's why
 

//show/hide div based on selected value using for loop

for(let i = 0; i<divEle.length; i++){
    let div = divEle[i];
   // console.log(div)
    if(i == selectValue - 1){
        div.style.display = 'block'
        div.textContent = selectContent
    }
    else{
        div.style.display = 'none'
    }
}


//show/hide div based on selected value using foreach loop
  
// divEle.forEach( (div,index)=>{   //div represent each div
//         //console.log(div)      
//         // console.log(index)   to see the index of each div 0,1,2,3
//         if(index == selectValue - 1){   
//             div.style.display = 'block';
//             div.textContent = selectContent;
//             //div.textContent += selectContent;
//         } 
//         else{
//             div.style.display= "none"
//         }
//     })
     
 })

//Note: selectValue start with 1,2,3,4....

//--------------------------
// oneEle.forEach((element)=>{
//     console.log(element.textContent = `${selectContent}`)
// })
//oneEle.forEach((element,index)=>{ 
    //console.log(element.textContent = `${selectContent}`)
    // Check if the index matches the selected value
    // if(index+1 == selectValue) 
    // console.log(element.textContent = `${selectContent}`)
//     if(index+1 == selectValue) 
//     console.log(element.textContent = `${selectContent}`)
// })


