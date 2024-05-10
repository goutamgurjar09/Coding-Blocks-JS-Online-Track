//JavaScript fetch() method is used to request data from a server. 
//The request can be of any type of API that returns the data in JSON or XML.
//The fetch() method requires two parameter, the URL to request and options, and returns a promise.


//fetch data from read.txt file using fetch

// fetch('content/read.txt')
// .then(response => response.text())  
// .then(data => console.log(data))
// .catch(error => console.log('Error fetching file:', error));


//----------------------------
//fetch data in json format from fake api jsonplaceholder
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())         
// .then(data => console.log(data))
// .catch(error => document.write('Cant fetching data:', error));

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())         
// .then(data => console.log(data))
// .catch(error => document.write('Cant fetching data:', error));


//How to perform crud operation on api/server 

//1.How to post/create/insert data on server/ fake api jsonplaceholder but actual me data insert  nhi hoga server/api->file pr bcz ye fake api/data hai  ydi iski jgh(api) koi php/python/java ki file hoti to y edata usme insert ho jata
          //means jo bhi data hmne insert kiya bo permanently save nhi hua is file/api me->https://jsonplaceholder.typicode.com/posts   bcz ye fake data hai and jo bhi result hoga bo bhi fake hoga
// const person = {
//   title: 'hello', 
//   body: 'Lala',
//   userId: 1
// }
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify(person),  //body ke ander hm bo data pass krte  hai jo hme server/api ke ander data ko like insert ,update ya delete  krna ho tb  and bo data kuch bhi ho skta hai like JSON data, Form data , text data->     JSON.stringify ->convert js object to json string  bcz hm api/server pr hm  data json ki form me bhejte hai bcz ye universal hota hai isko koi nhi programming language easily read kr skti hai means easily readable hota hai
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8', //jo bhi hm body ke through data bhejne bale hai bo kis formet me hoga  -> this is an optional part ->charset=UTF-8
//     // 'Content-type': 'application/x-www-from-urlencoded'  //if we want to send FORM DATA then we use this
//   }
// })
// .then((response) => response.json())
// .then((jsondata) => console.log(jsondata));   //{title: 'hello', body: 'Lala', userId: 1, id: 101}   total-id:100 post of data hai  to ye data id:101 pr jake insert hoga but actual me nhi hoga just understanding purpose


//2.How to Put/Update data from server/api/file

// const person = {
//   // id: 1,
//   title: 'hy',
//   body: 'kanu sir ',
//   userId: 1
// }
// fetch('https://jsonplaceholder.typicode.com/posts/1', { //its an id->1 
//   method: 'PUT',
//   body: JSON.stringify(person),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json)); //{title: 'hy', body: 'kanu sir ', userId: 1, id: 1} -> by default it returns an id


 //How to do partial update
//  const person = {
//   body: 'goutam sir ',
// }
// fetch('https://jsonplaceholder.typicode.com/posts/3', { 
//   method: 'PATCH',
//   body: JSON.stringify(person),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));//{userId: 1, id: 3, title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut', body: 'goutam sir '}


//-------------------------
//3.How to delete

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
// .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     console.log('Post with ID 1 has been deleted successfully.');
// })
// .catch(error => console.error('There was a problem with the fetch operation:', error));


//------------------------
//how to send/post From data on server/api

document.getElementById('saveform').addEventListener('click', function(e) {
  e.preventDefault();
  const obj = {
    title: document.getElementById('Name').value,
    body: document.getElementById('Email').value,
    userId: document.getElementById('password').value
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json',
    }
  })
  .then((response) => response.json())
  .then((json) => console.log('Response from Server:', json));  //Response from Server: {title: 'hy', body: 'wow', userId: '1', id: 101}
})



















//--------------------------
//using async & await
// async function logMovies() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
//   //console.log(response);

//   const data = await response.json();
//   console.log(data);
// }

// logMovies();

//--------------------------


// const response = await fetch('https://jsonplaceholder.typicode.com/posts');: This line initiates a network request to the specified URL, 'https://jsonplaceholder.typicode.com/posts'. 
//The await keyword is used to wait for the resolution of the fetch Promise, and it returns a Response object.

// const data = await response.json();: Once the fetch Promise is resolved, it reads the response body as JSON using response.json(). 
//The await keyword is used again to wait for the resolution of this new Promise, which gives us the parsed JSON data.


//  The fetch function initiates a request to 'https://jsonplaceholder.typicode.com/posts' and returns a Promise.
// The await keyword pauses the execution of the function until the Promise is resolved. Meanwhile, other asynchronous tasks outside this function can continue.
// The resolved value of the fetch Promise is a Response object.
// The second await is used to parse the response body as JSON, creating a new Promise that resolves to the parsed data.
// The await pauses the execution again until this Promise is resolved, providing access to the parsed JSON data.
// Finally, the console.log(data); statement logs the array of posts to the console.



//----------------------------

// API for get requests
// let fetchRes = fetch(
//   "https://jsonplaceholder.typicode.com/todos/1");
       
//   // FetchRes is the promise to resolve
//   // it by using.then() method
//   fetchRes.then(res =>
//       res.json()).then(d => {
//           console.log(d)
//       })

//-----------------------------------

      // user = {
      //   "name": "Geeks for Geeks",
      //   "age": "23"
      // }
      
      // // Options to be given as parameter 
      // // in fetch for making requests
      // // other then GET
      // let options = {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type':
      //       'application/json;charset=utf-8'
      //   },
      //   body: JSON.stringify(user)
      // }
      
      // // Fake api for making post requests
      //  fetch("http://dummy.restapiexample.com/api/v1/create",options)
      //  .then(res =>res.json())
      //  .then(d => {
      //      console.log(d)
      //   })

// user object: Represents user data with a name and age.

// options object: Contains configurations for the fetch request.

// method: 'POST': Specifies that it's a POST request.
// headers: Sets the content type to JSON.
// body: Converts the user object to a JSON string and sets it as the request body.
// fetchRes: Initiates a POST request to the specified URL ('http://dummy.restapiexample.com/api/v1/create') with the provided options.

// .then(res => res.json()): The first then block parses the response body as JSON.

// .then(data => { console.log(data); }): The second then block logs the parsed JSON data to the console.

// This code simulates a POST request to a dummy REST API endpoint, sending user data in the request body and logging the response from the server.



//--------------------------

