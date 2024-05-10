// WRONG Way


// function step1(){
//     console.log('Selecting the image from gallery');
//     setTimeout(function(){
//         return 'selected image'
//     } , 4000) //milli seconds => 4s
// }
// let image = step1(); 
// console.log(image); 
 
// Selecting the image from gallery
// undefined
//The issue here is that the step1 function does not explicitly return a value. The setTimeout function inside it is asynchronous, and the function step1 itself doesn't wait for the setTimeout to complete before finishing execution. As a result, the step1 function returns undefined by default.


// function step2(image){
//     console.log(`applying filter to the ${image} plz wait`)
//     setTimeout(function(){
//         return 'filter applied'
//     } , 2000)
// }
// let filteredImage = step2(image);
// console.log(filteredImage); 



//----------------------------
//Right way  -> using callback function


//If you want to capture the result of the asynchronous operation (in this case, the selection of the image after 4 seconds), you can use a callback function or utilize Promises.

// function step1(callback){
//     console.log('Selecting the image from gallery');
//     setTimeout(function(){
//         callback('selected image')
//     } , 4000) //milli seconds => 4s
// }
// step1( function(image){
//     console.log(image);
// }); 

//Selecting the image from gallery
//selected image     

//---------------------------

//2nd way- using promises

// function step1(){
//     console.log('Selecting the image from gallery');
//     return new Promise((resolve, reject) => { //resolve and reject an parameter pssed/works as a callback function
//         setTimeout(function(){
//            resolve('selected image')
//         },4000)
//     })

// }

// step1()
// .then(function(image){ //here-> image = selected image  
//    console.log(image)
// })
// Selecting the image from gallery
// selected image


//----------------------------

//Note: Keep in mind that using callbacks can lead to callback hell or the pyramid of doom when dealing with multiple asynchronous operations.
// In modern JavaScript, Promises or async/await syntax are often used to handle asynchronous code in a more readable and maintainable way.


//----------------------------
//CallBack Hell  with multiple async. operation

// Function to simulate an asynchronous operation
// function asyncOperation(callback) {
//     setTimeout(function () {
//         console.log('Async operation completed'); //both print after 3sec. and print 3 times bcz 3 times call kiya
//         callback('result of async operation');
//     }, 3000);
// }

// // // Nested callback example (callback hell)
// asyncOperation(function (result1) {
//     console.log(result1);

//     asyncOperation(function (result2) {
//         console.log(result2);

//         asyncOperation(function (result3) {
//             console.log(result3);

//             // More nested callbacks...
//         });
//     });
// });

// Async operation completed
// result of async operation
// Async operation completed
// result of async operation
// Async operation completed
// result of async operation

//Note: This nesting can become challenging to read and maintain as more operations are added.


//---------------------------

// Using Promises to avoid callback hell thats the better way

// function asyncOperation(){
//     console.log('Selecting the image from gallery');
//     return new Promise((resolve, reject) => {
//       setTimeout( function(){
//         resolve('Awoesome image selected')
//       },4000)  
//     })

// }

// asyncOperation()
// .then(function(image){
//     console.log(image);
//     return asyncOperation(); //again return kr do
// })
// .then(function(image1){ //so asyncOperation() returninig a promise to->again .then se yha catch kr lo result
//     console.log(image1);
//     return asyncOperation()
// })
// Selecting the image from gallery
// Awoesome image selected
// Selecting the image from gallery
// Awoesome image selected

// .then(function(image2){ //then yha catch kr lo result
//     console.log(image2); //ydi upr se return  asyncOperation() nhi krege to undefined dega

// })

// Selecting the image from gallery
// Awoesome image selected
// Selecting the image from gallery
// Awoesome image selected
// Selecting the image from gallery
// Awoesome image selected


//------------------------------
//This approach with async/await is often considered more readable and maintainable compared to the callback-based or Promise-based approach, especially when dealing with multiple asynchronous operations.


// Function to simulate an asynchronous operation returning a Promise
// function asyncOperation() {
//     return new Promise((resolve) => {
//         setTimeout(function () {
//             console.log('Async operation completed');
//             resolve('result of async operation');
//         }, 3000);
//     });
// }

// // Using async/await to simplify asynchronous code

// async function executeAsyncOperations(){
//   try{
//       const result1 = await asyncOperation()
//       console.log(result1)

//       const result2 = await asyncOperation()
//       console.log(result2)

//       const result3 = await asyncOperation()
//       console.log(result3)
//   }
//   catch(error){
//      console.error('An error occurred:', error);
//   }
// }

// // Call the async function
// executeAsyncOperations();

// Async operation completed
// result of async operation
// Async operation completed
// result of async operation
// Async operation completed
// result of async operation


//In this  example, the asyncOperation function still returns a Promise. The executeAsyncOperations function is marked as async, and await is used within it to simplify the asynchronous code. The try...catch block is used for error handling.



// ------------------------------------------------------
//--> RIGHT WAY


// function step1(fn){
//     console.log('Image is being selected from the gallery...')
//     setTimeout(function(){
//         console.log('Image is selected now');
//         fn('photo.jpg') //step 2 ka functions
//     } , 4000)
// }

// function step2(image , fn){ //filter function
//     console.log(`Applying filter to the ${image}`)
//     setTimeout(function(){
//         console.log(`filter applied to the ${image}`);
//         fn('Filtered Image') //step 3 ka function
//     } , 2000)
// }
// function step3(filter , fn){
//     console.log(`Adding caption to the ${filter}`);
//     setTimeout(function(){
//         console.log('caption done')
//         fn('image with caption') //step 4 ka function
//     } , 3000)
// }
// function step4(caption){
//     console.log(`uploading your final ${caption}`);
//     setTimeout(function(){
//         console.log('Image uploaded successfully');
//     } , 5000)
// }

// // horizontally grow -> pyramid of DOOM
// step1(function(image){
//     step2(image , function(filter){
//         step3(filter , function(caption){
//             step4(caption)
//         });
//     });
// });


// Image is being selected from the gallery...
// Image is selected now
// Applying filter to the photo.jpg
// filter applied to the photo.jpg
// Adding caption to the Filtered Image
// caption done
// uploading your final image with caption
// Image uploaded successfully

