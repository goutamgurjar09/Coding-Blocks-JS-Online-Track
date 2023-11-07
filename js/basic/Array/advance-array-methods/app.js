 let worldCup = ['india' , 'australia' , 'pakistan' , 'New Zealand' , 'sri lanka']

// 1. forEach() -> method which accepts a cb function

// worldCup.forEach( function(item){//->syntax -> HOF
//    console.log(item);
// })
// console.log(worldCup);//[ 'india', 'australia', 'pakistan', 'New Zealand', 'sri lanka' ]
// india
// australia  
// pakistan   
// New Zealand
// sri lanka  

// worldCup.forEach( function(item,index){
//     console.log(item + '-> ' + index);
// })
// india-> 0      
// australia-> 1  
// pakistan-> 2   
// New Zealand-> 3
// sri lanka-> 4


// -------------------------------------
// worldCup.map() -> syntax -> HOF
//2. map() - > methods

//let numbers = [10 , 20 , 30 , 40 , 50]

// let newArray = numbers.map( function(item){
//     console.log(item);
// })

// 10
// 20
// 30
// 40
// 50

//----------------------------



// let newArray = worldCup.map( function(item){
//     return item.toUpperCase();
// })
// console.log(worldCup)
//console.log(newArray)

//[ 'india', 'australia', 'pakistan', 'New Zealand', 'sri lanka' ]

//[ 'INDIA', 'AUSTRALIA', 'PAKISTAN', 'NEW ZEALAND', 'SRI LANKA' ]

//--------------------------------
//let numbers = [10 , 20 , 30 , 40 , 50]

// let newSquareArr = numbers.map( function(item,index){
//     return item * index;
// })
// console.log(numbers)//[10 , 20 , 30 , 40 , 50]
// console.log(newSquareArr)//[ 0, 20, 60, 120, 200 ]


// ------------------------------------------------

// 3. filter -> method()
// let numStr = [10 ,'g', 30 , 'a' , 50]



// let filterArr = numStr.filter( function(item){
//     if(typeof(item) === 'number'){
//         return item;
//     }
// })
// console.log(numStr)//[ 10, 'g', 30, 'a', 50 ]
// console.log(filterArr)//[ 10, 30, 50 ]

// 4. reduce -> method() 