// async function test(){
    
//     console.log(2);
//     console.log(3);
//     console.log(4);
// }
// console.log(1);
// test();
// console.log(5);

//1 2 3 4 5
//---------------------
// async function test(){
    
//     console.log(2);
//    await console.log(3);   //ye print hoga but iske just baad ka code n[print nhi hoga bcz hmne ise yha wait krne ko kha iska kaam jb tk pura nhi hoga tb tk print nhi hoga next statement->17   ->but is function ke bahar ka code chlega line->21
//     console.log(4);
// }
// console.log(1);
// test();
// console.log(5);
//1 2 3 5 4

//https://api.tvmaze.com/search/shows?q=girls

// async function test(){
//    console.log("api data loading.....")   //first this will print
//    let responce = await fetch('https://api.tvmaze.com/search/shows?q=girls');  //await means yha waith kijie  data fetch nhi hota tb tk    //fetch method data json/text formet me deta hai
//    let data = await responce.json();   
//    console.log(data);
//    console.log("finally data aa gya");  //print last me after coming data
// }
// test();
// console.log("data iske baad aayega tb tk wait kro"); //second this will print then data bcz we are using await keyword


//---------------------
// async function test(){
//    let responce = await fetch('https://api.tvmaze.com/search/shows?q=girls'); 
//    console.log("api data loading.. pls wait"); //then print this
//    let data = await responce.json();   //json data return from api/server
//    console.log(data);
//    console.log("finally data aa gya");  
// }
// test();
// console.log("data iske baad aayega tb tk wait kro"); //first print this


//-------------------------
//using .then and .catch
// async function test(){
//     let responce = await fetch('https://api.tvmaze.com/search/shows?q=girls'); 
//     console.log("api data loading.. pls wait"); //then print this
//     let data = await responce.json();   
//     return data;
    
//  }
//  test().then(res => console.log(res))
//  .catch(error => console.log(error));

//-----------------------
//isse hme catch ko .then ke baad likhne ki need nhi hai direct hm try catch use kr lenge
// async function test(){
//     try{
//         let responce = await fetch('https://api.tvmaze.com/search/shows?q=girls'); 
//         let data = await responce.json();   
//         return data;
//     }
//     catch(error){                      //jb bhi try block ke ander kuch bhi error aayegi to catch block call hoga and error aa jayega
//         console.log(error);
//     }   
//  }
//  test().then((res) =>{
//     console.log(res)  
//  });
   

 //------------------------
 //Async&await use krne se hm .then and .catch ki chaining se bch skte hai isse hmara code or bhi simple ho jata hai
//  function setData(){
//     return new Promise((resolve, reject) =>{
//         setTimeout( () =>{
//             let name = "goutam gurjar"
//             resolve(name);  //iske ander aap ek hi chij pass kr skte ho ,if you want to pass jyada data then use object/array
//         },2000)
//     })
//  }
//  async function getData(){
//     let username = await setData();  //it is returning promise
//     console.log(username);
//  }
//  getData();

//getData().then(res => console.log(res));


//----------------------------


function setData1(){
    console.log("pls wait your name loading.....");
    return new Promise((resolve, reject) =>{
        setTimeout( () =>{
            const name = "goutam gurjar "
            resolve(name);
        },2000)
    })
 }

 function setData2(name) {
    console.log(`pls wait  ${name} for 2 seconds`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post =   `front-end developer`;
            resolve(post);
           // reject("something went wrong");
        }, 2000);
    });
}

function setData3(post) {
    console.log(`your role is ${post}, pls wait for new role....`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const role = `full stack developer`;
            resolve(role);
        }, 2000);
    });
}

// setData1()
//  .then((name) => {
//      console.log("your name is:", name); 
//      return setData2(name);
//  })
//  .then((post) => {
//      console.log("your post is:", post);  
//      return setData3(post);
//  })
//  .then((role) => {
//      console.log("your role is:", role);  
//  })
//  .catch((error) => {
//      console.error("An error occurred:", error);
//  });


//using async/await
 async function getData(){
    try{
        let name = await setData1();  //it is returning promise
        console.log("here is your name:",name);
        let post = await setData2(name); 
        console.log("here is your post:",post);
        let role = await setData3(post);
        console.log("here is your role:",role);
    }
    catch(error){
        console.error("An error occurred:", error);
    }
 }
 getData();

//  pls wait your name loading.....
//  here is your name: goutam gurjar 
//  pls wait  goutam gurjar  for 2 seconds
//  here is your post: front-end developer
//  your role is front-end developer, pls wait for new role....
//  here is your role: full stack developer