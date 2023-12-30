// Async/await
// there is a special syntax to work with promises in more comforetable fashion,
// called  async/await. it is surprisingly easy to understand and use.

//the word "async" before a function means one simple thing: a function always returns a promise

//so the async keyword is added to functions to tll them to return a promise rather than directly returning the value

//we can use await when calling any function that returns a Promise , including web API functions.

//the keyword await makes javascript wait until that Promise settles  and returns its result

//So basically async/await ka use hm jo bhi hmara promise data return krta hai usko fatch/consume krne ke liye krte hai instead of  (.then)


// ---------------------
//ex-1.
//promise-1
// const myPromise1 = new Promise( (resolve,reject) =>{
//           setTimeout( () => {
//             let roll_no = [1,2,3,4,5]
//             resolve(roll_no)
//           },2000);
// } );

// //promise-2

// const getbioData = new Promise((resolve, reject) => {
//         setTimeout( ()=>{
//           let bioData = {
//             name : "goutam",
//             age: 23,
//           }
//           resolve(`My name is ${bioData.name} and i am ${bioData.age} years old`)
//         },4000)
// })


// //to fatch the promise data
// async function getData(data){
//     const roll_noData = await myPromise1;  //await basically wait 2sec. tk krega promise se data return krne ka-> then await return krega data
//     console.log(roll_noData)   //[ 1, 2, 3, 4, 5 ]
     
//     const bioDatas = await getbioData
//     console.log(bioDatas)
// }
// getData()



//------------------------
// //promise-1
// const myPromise1 = new Promise( (resolve,reject) =>{
//     setTimeout( () => {
//       let roll_no = [1,2,3,4,5]
//       resolve(roll_no)
//     },2000);
// } );

// //promise-2 depands on promise -1

// const getbioData = (roll_noData) => {  //ise parameter ko settimeout me as a third parameter pass krna pdega
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         let bioData = {
//           name: "goutam",
//           age: 23,
//         };
//         resolve(`My name is ${bioData.name} and I am ${bioData.age} years old`);
//       }, 4000,roll_noData);
//     });
// };
  

// //to fatch the promise data
// async function getData(){
// const roll_noData = await myPromise1;  //await keyword is used to wait for the resolution of the myPromise1 Promise.
// console.log(roll_noData)   //[ 1, 2, 3, 4, 5 ]

// const bioDatas = await getbioData(roll_noData) 
// console.log(bioDatas)
 
// //return bioDatas; //this async function will return panding promise  bcz abi wait krna pdega data aane tk- > lets see below
// }
// getData()

//open console and run this code

// Promise {<pending>}[[Prototype]]: 
//[[PromiseState]]: "fulfilled"[[PromiseResult]]: "My name is goutam and I am 23 years old"
//  [1, 2, 3, 4, 5]
//  My name is goutam and I am 23 years old



//----------------------------------

// //promise-1
// const myPromise1 = new Promise( (resolve,reject) =>{
//   setTimeout( () => {
//     let roll_no = [1,2,3,4,5]
//     resolve(roll_no)
//   },2000);
// } );

// //promise-2 depands on promise -1

// const getbioData = () => {  //ise parameter ko settimeout me as a third parameter pass krna pdega
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let bioData = {
//         name: "goutam",
//         age: 23,
//       };
//       resolve(`My name is ${bioData.name} and I am ${bioData.age} years old`);
//     }, 4000);
//   });
// };


// //to fatch the promise data
// async function getData(){
// const roll_noData = await myPromise1;  //await keyword is used to wait for the resolution of the myPromise1 Promise.
// console.log(roll_noData)   //[ 1, 2, 3, 4, 5 ]

// const bioDatas = await getbioData() //->getbioData is a function to hme ise as a function call krna pdega
// console.log(bioDatas)

// }
// getData()

// [ 1, 2, 3, 4, 5 ]
// My name is goutam and I am 23 years old


//-------------------------------
//using try and catch

//promise-1
const myPromise1 = new Promise( (resolve,reject) =>{
  setTimeout( () => {
    let roll_no = [1,2,3,4,5]
    resolve(roll_no)
  },2000);
} );

//promise-2 depands on promise -1

const getbioData = () => {  //ise parameter ko settimeout me as a third parameter pass krna pdega
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bioData = {
        name: "goutam",
        age: 23,
      };
      resolve(`My name is ${bioData.name} and I am ${bioData.age} years old`);
    }, 4000);
  });
};


//to fatch the promise data
async function getData(){
  try{
    const roll_noData = await myPromise1;  //await keyword is used to wait for the resolution of the myPromise1 Promise.
    console.log(roll_noData)   //[ 1, 2, 3, 4, 5 ]

    const bioDatas = await getbioData() //->getbioData is a function to hme ise as a function call krna pdega
    //console.log(bioDatas)
    console.log(bioDatass) //the error -> ReferenceError: bioDatass is not defined

  }
  catch(error){
    console.log( `the error -> ${error}`) // -> ye tbi execute hoga jb try block me error hogi means try block me kuch bhi wrong hoga to catch block chlega
  }
  

}
getData()