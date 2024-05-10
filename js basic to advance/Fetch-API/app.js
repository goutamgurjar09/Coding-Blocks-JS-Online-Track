//The Fetch api provides fetch() method defined on the window object, which you can use to perform requests.

//this method returns a Promise that you can use to retrieve the response of the request
//The Fetch Api provides an interface for fatching resourses (including across the network)

//fetch() allows you to make network requests similar to XMLHttpRequest(XHR)

//The main diff. is that Fetch API uses Promises ,which enables a simpler and cleaner API, avoideing callback hell and having to remember the complex API of XMLHttpRequest
//and you should see  the image folder

//---------------
//syntax:- let promise = fetch(url,[options])
//url - the URL to access
//options - optional parameter method, headers


//---------------------
//Fetch API : Response Metadata from covid19 api

// fetch('https://disease.sh/v3/covid-19/countries')
// .then(function(response){
//    console.log(response.headers.get('Content-Type'));
//    console.log(response.headers.get('Date'));
//    console.log(response.status);
//    console.log(response.statusText);
//    console.log(response.type);
//    console.log(response.url);
// })
//output
// application/json; charset=utf-8
// Sat, 30 Dec 2023 10:19:27 GMT       
// 200
// OK
// basic
// https://disease.sh/v3/covid-19/countries


//----------------------
//Fetch API : Response Body

//Responce provides multiple promise-based methods to access the body in various formats

//1. response.text()- read the response and return as text
//2. response.json()- parse the response as JSON
//3. response.formData()- return the response as FormData object
//4. response.arrayBuffer()- return the responce as ArrayBuffer


//--------------------
//lets see an example
//Fetch data from Fake api  jsonplaceholder->https://jsonplaceholder.typicode.com/posts

// const apiEndPoint = "https://jsonplaceholder.typicode.com/posts"

// fetch(apiEndPoint)
// .then( (response)=>{
//      //console.log(response) //return response object then we need to convert this object to json
//     return response.json() 
// })
// .then( (getjsondata)=>{
//     console.log(getjsondata)
// })

//(or) if we dont want to return then we simply write this way 
// .then( (response)=>{
//     //console.log(response) //return response object then we need to convert this object to json
//     response.json().then( (getjsondata)=>{ //consume json data
//         console.log(getjsondata)
//      }) 
// })


//------------------------------
//how to create,get,update and delete a post form api

//select all button

const getBtn= document.querySelector('#getPost')
const createtBtn = document.querySelector('#createPost')
const updatetBtn = document.querySelector('#updatePost')
const patchBtn = document.querySelector('#patchPost')
const deleteBtn = document.querySelector('#deletePost')

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts"

//getBtn.addEventListener('click',()=>{
    //alert("hy i am working")
    // fetch(apiEndPoint).then( (res)=>{
    //     res.json().then ( (getjsondata)=>{
    //       console.log(getjsondata)
    //     })
    // })
//})

//------------------
//get posts
// const getPost = async()=>{
//    try{
//         const response = await fetch(apiEndPoint) //await islye bcz fetch-> promise return krta hai
//         if(response.status != 200){
//             throw new Error (`Some Error occured , Status code: ${responce.status}`)
//         }
//         const allpost = await response.json()  //and bcz ye bhi ek promise return krta hai
//         return allpost;
//    }
//    catch (error){
//       console.log(error ,  "Some error occurred. Please fix it.")
//    }

// }

  

//getPost return a promise so we can consume this/allpost and return it on getBtn pr click krke
// getBtn.addEventListener('click',async()=>{
//     const posts = await getPost() //bcz getpost fun ek promise return kr rha
   // console.log(posts) //posts is an arr of object
   
   // Create a dynamic table based on the fetched posts means ye sara data tbody me jayega
    // const tableBody = posts.map( (post)=>{ //post is an object 
    //    return `<tr>
    //         <th scope="row">${post.id}</th>  //this is an object property inside the array and post is an obj-> post.id
    //         <td>${post.title}</td>
    //         <td>${post.body}</td>
    //     </tr>`
    // }).join('\n')
    //--------------
    //direct return ES6
//  if(posts){ 
//     const tableBody = posts.map(post=>`<tr> 
//              <th scope="row">${post.id}</th>  
//              <td>${post.title}</td>
//              <td>${post.body}</td>
//          </tr>`
//      ).join('')

//     const table = `
//         <table class="table">
//             <thead>
//                 <tr>
//                     <th scope="col">id</th>
//                     <th scope="col">Title</th>
//                     <th scope="col">Body</th>     
//                 </tr>
//             </thead>
//             <tbody>
//                 ${tableBody}
//             </tbody>
//         </table> `

//      document.querySelector('#showtableData').innerHTML = table
//  }
//})

//In this example, the map function is used to iterate over the array of posts and create a table row for each post. The join('') method is then used to join the array of table rows into a single string, which is inserted into the <tbody> of the table. Adjust the properties (e.g., post.id, post.title, post.body) based on the structure of your post objects. Also, make sure to replace 'tableContainer' with the actual ID of the container where you want to insert the table
//The join('') method is used to concatenate the elements of an array into a single string. When you join with an empty string (''), it means there is no separator between the elements, and they are simply concatenated without any additional characters.
//Note: The map function creates an array of strings, where each string represents an HTML table row. Then, join('') is applied to concatenate these strings into a single string. The resulting tableBody string can be easily inserted into the HTML document.

//-----------------------  

// //task-2 -> create new post inside the arr of obj
// const createPost = async (newPost)=>{
//    try{
//         const response = await fetch(apiEndPoint ,{  //fetch(apiEndPoint,option)-> option me hm method ko use krte hao
//             method:"POST",
//             body: JSON.stringify(newPost), //body jo ki object hai jise hmne  inside the createtBtn event->  newPost ke name se create kiya hai
//             headers: { "Content-type": "application/json; charset=UTF-8"},
//         }) 
//         if(response.status != 201){
//         throw new Error (`Some Went Wrong , Status code: ${response.status}`)
//         }
//         const post = await response.json()
//         return post;
//    }
//    catch(error){
//     console.log(error)
//    }
// }



// createtBtn.addEventListener('click',async()=>{
//       const newPost = {
//          title: "new post title",
//          body: "hy goutam gurjar,how are you",
//          userId:1  
//       }
//       const createdPost = await createPost(newPost)
//       console.log(createdPost)
// })
// //id bydefault milti hai server se
// //{title: 'new post title', body: 'hy goutam gurjar,how are you', userId: 1, id: 101}

// //Note: But we are using fake api to actual server data pr koi change/create post nhi hoga 
// //we are just trying to understand purpose

// //----------------------

// //task-3 updated post 
// const updatePost = async (newPost,id)=>{
//     try{
//          const response = await fetch(`${apiEndPoint}/${id}` ,{  //->  /posts/1->  fetch(`${apiEndPoint}/${id}`-> Routes 
//              method:"PUT",
//              body: JSON.stringify(newPost), //body jo ki object hai jise hmne  inside the createtBtn event->  newPost ke name se create kiya hai
//              headers: { "Content-type": "application/json; charset=UTF-8"},
//          }) 
//          if(response.status != 200){
//          throw new Error (`Some Went Wrong , Status code: ${response.status}`)
//          }
//          const post = await response.json()
//          return post;
//     }
//     catch(error){
//      console.log(error)
//     }
//  }
// // updated post i want to change id:2 ->post data
// updatetBtn.addEventListener('click',async()=>{
//     const newPost = {
//        id : 2,
//        title: "Updated post title",
//        body: "Updated post title",
//        userId:1  
//     }
//     const updatedPost = await updatePost(newPost,2)
//     console.log(updatedPost)
// })
// //update id:2 post -> {id: 2, title: 'Updated post title', body: 'Updated post title', userId: 1}

// //Note: But we are using fake api to actual server data pr koi change nhi hoga 
// //we are just trying to understand purpose


// //-------------------
// //task-4 patch method  update 1 post data

// const patchPost = async (newPost,id)=>{
//     try{
//          const response = await fetch(`${apiEndPoint}/${id}` ,{  //->  /posts/1->  fetch(`${apiEndPoint}/${id}`-> Routes 
//              method:"PATCH",
//              body: JSON.stringify(newPost), //body jo ki object hai jise hmne  inside the createtBtn event->  newPost ke name se create kiya hai
//              headers: { "Content-type": "application/json; charset=UTF-8"},
//          }) 
//          if(response.status != 200){
//          throw new Error (`Some Went Wrong , Status code: ${response.status}`)
//          }
//          const post = await response.json()
//          return post;
//     }
//     catch(error){
//      console.log(error)
//     }
// }

//Patch post  -> i want to change only title then we can use patch ->  routes-> /posts/1

// patchBtn.addEventListener('click',async()=>{
//     const newPost = {
//        id : 2,           //means id:2-> post 2 me hm title change kr rhe
//        title: "Updated post title",   
//     }
//     const patchedPost = await patchPost(newPost,2)
//     console.log(patchedPost)
// })

//{userId: 1, id: 2, title: 'Updated post title', body: 'est rerum tempore vitae\nsequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla'}

//--------------------

//task-4  Delete post


// const deletePost = async (id)=>{
//     try{
//          const response = await fetch(`${apiEndPoint}/${id}` ,{  //->  /posts/1->  fetch(`${apiEndPoint}/${id}`-> Routes 
//              method:"DELETE",
//          }) 
//          if(response.status != 200){
//          throw new Error (`Some Went Wrong , Status code: ${response.status}`)
//          }
//          const post = await response.json()
//          return post;
//     }
//     catch(error){
//      console.log(error)
//     }
// }

// deleteBtn.addEventListener('click',async()=>{
//     const deletedPost = await deletePost(2) //id=2
//     console.log(deletedPost)
// })
//return an empty obj {}

//---------------------------
// Routes/Path of all methods and ise type se hme routes bnana pdega alg-alg hr methods ke liye means in routes pr req. hit hogi then hme response milega
// All HTTP methods are supported. You can use http or https for your requests.

// GET	/posts
// GET	/posts/1
// GET	/posts/1/comments
// GET	/comments?postId=1
// POST	/posts
// PUT	/posts/1
// PATCH  /posts/1
// DELETE	/posts/1


//----------------------
//fetch the covid19 data based on api
//its a covid19 api ->take from gfg

// fetch('https://disease.sh/v3/covid-19/countries')
// .then( function(apiData){
//    //console.log(apiData)   //its a json data but ise convert krna pdega js object me through json() method
//    return apiData.json(); // Convert the response to JSON
// })
// .then( function(actualCovertData){
//     console.log(actualCovertData)
// })
// .catch( function(error){
//     console.log(error)
// })


//fatch covid19 data of country = India 


fetch('https://disease.sh/v3/covid-19/countries')
  .then(function (response) {
    return response.json();
  })
  .then(function (countriesData) {
    //console.log(countriesData)

    //Find data for India
   // Assuming countriesData is an array of object means iske ander bhot sare object hai 
   //const indiaData = countriesData.find(country => country.country === 'India');
    // const indiaData = countriesData.filter(item => { //item means object/value of array
    //     if (item.country === 'India') {
    //         return item;
    //     }
    // });
    // if (indiaData) {
    //      console.log('COVID-19 Data for India:', indiaData);
    //      console.log('Total Cases in India:', indiaData[0].cases); //bcz indiaData is an array of object  means filter method returns an array
    //      console.log('Total Deaths in India:', indiaData[0].deaths);
    // } 
    const indiaData = countriesData.find(country => { //country means object/value of array
      if (country.country === 'India') {
          return country;
      }
    });
    if (indiaData) {
        console.log('COVID-19 Data for India:', indiaData);
        console.log('Total Cases in India:', indiaData.cases);
        console.log('Total Deaths in India:', indiaData.deaths);
    } 
    else {
        console.log('Data for India not found.');
    }
  })
  .catch(function (error) {
     console.log(error);
  });

//----------------------

