//Primise is an object in js and it is used to handle asynchronous operations more effectively.
//they avoid callback hell and provide a cleaner and more structured way to work with  asynchronous operations.
  
  //A promise can be in one of three states:
  //1. Pending:- the initial state means promise is neither fulfilled nor rejected

 //2. Fulfilled:- the promise/operation completed successfully

 //3. Rejected:- the promise/operation failed

//then() :- it is used/Called when the promise is successfully resolved/fullfilled means it consumes the fullfiled promise

//catch() :- it is used/Called when the promise is rejected means it consumes the rejected promise



//ex-1.
 function asynchronousOperation(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
          let success = false;   
          if(success)
            resolve("operation completed successfully");
          
          else
            reject("operation failed")
        },2000)
    })
 }
 asynchronousOperation().
 then(function(Resolve){  
    console.log('Success:', Resolve);
 })
 .catch(function(Reject){
    console.log('Error:', Reject);
 })

//----------------------------------
//ex-2
  let p=new Promise(function(resolve, reject){  
  let x= 7;  
  if(x==5)  
      resolve(" executed and resolved successfully");  
  else  
      reject("rejected");  
  });  

   p.then(function(Resolve){  
   document.write("Promise is", Resolve);  
   }).catch(function(Reject){  
   document.write("Promise is ", Reject);  
   });  



//-----------------------------
// function getData(cb){
//     setTimeout(function(){
//       let data = "hello this is goutam gurjar"   //Assume server  data dega
//        cb(data , null)                          //hello this is goutam gurjar if
//        //  cb(data)
//        // cb(null)  //its an error part server deside krega ->        //undefined else

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
// step-2  ->this is new promise constructor
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
// step-4
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

// let myPromise = new Promise( function(resolve,reject){
//     setTimeout (function(){
//       let data = "hello sir  this side goutam ranve"   
//       let err = 'mai server hu nhi de rha data' 
      
//       resolve(data)  //promise complete bcz i called  resolve() fun before reject()  means jis fun ko phle call krege bhi server responce dega  ->
     
//       reject(err)    //wada tod dena
           
//     },3000)
// })

// myPromise
// .then(function(CatchServerData){
//  console.log(CatchServerData)    //hello this side goutam ranve
// })
// .catch( function(CatchServerError){
//     console.log(CatchServerError)
// })


//-------------------------

//Certainly! Nested promises, often referred to as "promise chaining," can lead to a pattern known as the "Pyramid of Doom" or "Callback Hell." 
//Here's an example using promises:
function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Operation 1");
      resolve(1);
    }, 1000);
  });
}

function asyncOperation2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Operation 2 with data:", data);
      resolve(2);
    }, 1000);
  });
}

function asyncOperation3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Operation 3 with data:", data);
      resolve(3);
    }, 1000);
  });
}

// Nested promises (Pyramid of Doom)
asyncOperation1()
  .then((result1) => {
    return asyncOperation2(result1);
  })
  .then((result2) => {
    return asyncOperation3(result2);
  })
  .then((result3) => {
    console.log("Final Result:", result3);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  //Note: The code attempts to execute three asynchronous operations in sequence, with each operation depending on the result of the previous one, and finally log the final result.



//-----------------------------
//Using async/Await
async function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Operation 1");
      resolve(1);
    })
  })
}

async function asyncOperation2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Operation 2 with data:", data);
      resolve(2);
    })
  })
}

async function asyncOperation3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Async Operation 3 with data:", data);
      resolve(3);
    })
  })
}

function executeAsyncOperations() {
  try{
    const result1 = asyncOperation1();
    const result2 = asyncOperation2(result1);
    const result3 = asyncOperation3(result2);
    console.log("Final Result:", result3);
  }
  catch(error){
    console.error("Error:", error);
  }
       
}