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


//-------------------
// Filter()
//what is filter() lets see in the code
//filter method ka use hm array me se value ko filter krne ke liye use krte hai based on some condition
//let see hmare pass ek array hai and is array me se hm even values ko findout/filter krna chahte hai using filter method 
//so we can achieve this using  using filter method 
//so this is how we write filter function
//filter function ek callback function accept krta hai jisme three parameter hote hai (currval,index,origionalarray)
//ab ydi condition true hoti hai to ye callback function hme true return krta hai to hme bo value mil jati hai
//and ydi false return krta hai to filter function use ignore kr deta hai



// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// let newarr = array.filter( (curval,index,array)=>{
//     if(curval % 2 == 0){
//        return curval;
//     }
// })
// console.log(newarr)



//------------------------
//map() -> method

//map methods creates a new array with the result of calling a function for every array element. it except an callback  function and returns a new array

//The map() calls the provided function once for each element in an array , in order

//Syntex-> arr.map(function(currvalue,index,arr),thisValue)

//thisValue -> means ye khtm hone ke baad ->(currvalue,index,arr) aap ek khud ka object create kr skte ho and uski valu ko this ke through access kr skte ho

//const oldarr = ['a','b','c','d']

// const newArr = oldarr.map( (currval , index , oldarr)=>{
//     // return currval
//     // return currval + 'goutam' //and we can change oldarr value in newarr  ->[ 'agoutam', 'bgoutam', 'cgoutam', 'dgoutam' ] but it does'nt effect on older array
//     //return index+ ":" + currval
//     console.log(oldarr)

// })
// console.log(newArr)
// console.log(oldarr)
// [ 'agoutam', 'bgoutam', 'cgoutam', 'dgoutam' ]
// [ 'a', 'b', 'c', 'd' ]


//-------------------
//create an arr of object
// const studentdata = [
//    {id:1,name:'goutam',degree:'Bca'},
//    {id:2,name:'lala',degree:'Mca'},
//    {id:3,name:'kanu',degree:'Bsc'}

// ]
// console.log(studentdata[0])//{ id: 1, name: 'goutam', degree: 'Bca' }
// console.log(studentdata[0].name) //goutam

// const newData = studentdata.map( (currval)=>{
//     return `My name is ${this.name}`
//     //return `My name is ${currval.name}. My highest degree is ${currval.degree} ` //destructure object

//     //return currval

// },this)
// console.log(newData)//[ 'My name is goutam', 'My name is lala', 'My name is kanu'


// [
//     'My name is goutam. My highest degree is Bca ',
//     'My name is lala. My highest degree is Bca ',
//     'My name is kanu. My highest degree is Bca '
//  ]



//--------------------------
//how we can use this keyward  in map
const studentdata = [
    { id: 1, name: 'goutam', degree: 'Bca' },
    { id: 2, name: 'lala', degree: 'Mca' },
    { id: 3, name: 'kanu', degree: 'Bsc' }
  ];
  
  const newData = studentdata.map(function(currval) {  //
    // You can use `this` to refer to an external context
    return `My name is ${currval.name}. My highest degree is ${currval.degree}. External value: ${this.externalValue}`;
  }, { externalValue: 'Some External Value' });
  
  console.log(newData);
  

  //In JavaScript, the this keyword inside a map callback function refers to the global object (window in a browser environment). The map function allows you to pass an optional second argument, which will be used as the value of this within the callback function.

//  In this example, the second argument to map is an object ({ externalValue: 'Some External Value' }). This object becomes the value of this inside the map callback function. You can then access properties of this object using this.propertyName.

//Please note that arrow functions do not have their own this context; instead, they inherit it from the enclosing scope. If you're using an arrow function, the second argument to map won't affect the value of this inside the arrow function if you will use then it will give undefined. In that case, you need to use a regular function as shown in the example above.