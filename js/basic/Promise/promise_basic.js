// function getData(cb){
//     setTimeout(function(){
//       //let data = "hello this is goutam gurjar"   //Assume server  data dega
//      //  cb(data , null)                          //hello this is goutam gurjar if
//      //    cb(data)
//         cb(null)  //its an error part server deside krega ->        //undefined else

//     },2000)
// }

// getData(function(data,error){
//  if(data){
//     console.log(data , 'if')
  
//  }
//  else{
//     console.log(error , 'else')
//  }
// })


//-----------------------------
// callback hell -> Promise

// step-1
// let promise1 = new Promise() //object


//-----------------------------
// step-2
// let promise1 = new Promise(function(){  //it accept an callback function

// }) 


// ------------------------------------------
// step-3

// let myPromise = new Promise( function(resolve,reject){
//        setTimeout (function(){
//          let data = "hello this side goutam"   //Assume server  data dega
//          resolve(data)    //promise complete
//        },3000)
// })

// myPromise.then(function(CatchServerData){
//     console.log(CatchServerData)  //hello this side goutam
// })


// ------------------------------------------
// step-3
// let myPromise = new Promise( function(resolve,reject){
//     setTimeout (function(){
//       //let data = "hello this side goutam"   //Assume server  data dega
//       let err = 'mai server hu nhi de rha data' //error dega

//       //resolve(data)    
//       reject(err)      //promise incomplete
//     },3000)
// })

// myPromise
// .then(function(CatchServerData){
//  console.log(CatchServerData)
// })
// .catch( function(CatchServerError){
//     console.log(CatchServerError)

// })

//--------------------------------------------
//step-4

// let myPromise = new Promise( function(resolve,reject){
//     setTimeout (function(){
//       let data = "hello this side goutam"   
//       let err = 'mai server hu nhi de rha data' 
      
//       reject(err)    //promise not complete bcz i called  reject() fun before resolve()  means jis fun ko phle call krege bhi server responce dega  ->mai server hu nhi de rha data
//       resolve(data)  //wada tod dena
           
//     },3000)
// })

// myPromise
// .then(function(CatchServerData){
//  console.log(CatchServerData)
// })
// .catch( function(CatchServerError){
//     console.log(CatchServerError)

// })

//--------------------------------------------

//step-5

let myPromise = new Promise( function(resolve,reject){
    setTimeout (function(){
      let data = "hello this side goutam ranve"   
      let err = 'mai server hu nhi de rha data' 
      
      resolve(data)  //promise complete bcz i called  resolve() fun before reject()  means jis fun ko phle call krege bhi server responce dega  ->
     
      reject(err)    //wada tod dena
           
    },3000)
})

myPromise
.then(function(CatchServerData){
 console.log(CatchServerData)    //hello this side goutam ranve
})
.catch( function(CatchServerError){
    console.log(CatchServerError)
})