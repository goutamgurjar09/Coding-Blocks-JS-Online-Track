
//HOF ->A function which takes another function as an argument or returns a function  is called a higher-order function.


//CB ->A function that is passed inside another function as an argument or returns a function as its result is called a higher-order function.


//1. why we use HOF and CB
//ex-> Suppose we have to create a calculater operation to hme alg -alg fun bana pdega like add,subtract,division and so on but it will be lenthy process

//ex;
function add(n1,n2){ 
    return n1+n2;
   
}
function sub(n1,n2){
    return n1-n2;

}
function multi(n1 ,n2){ 
     return n1*n2;
}

// console.log(add(10,20));
// console.log(sub(10,20));
// console.log(multi(10,20));


//--------------------------------------------
//we will create a master fun HOF  and perform same action  isse apko alg -alg(like add,sub...) function ko call nhi krna pdega  simple aapko HOF ko call krna pdeaga

function operation(n1,n2,cb){   //hof
    return cb(n1,n2);
}
console.log(operation(10,20,add));
console.log(operation(10,20,sub));
console.log(operation(10,20,multi));






//ex-> suppose aapki ek company hai or apko candidate/employees higher krna hai to uske liye apko interview lena hai then we will use hof to understanding purpose


const interviewer = (name) =>{//arrow function
    if(name == "goutam"){
      return function(question){//this is anonumous function bina name bala
         console.log(`Hi ${name} plz explain what is ${question}`)
      }
    }
    if(name == "sahaj"){
        return function(question){
           console.log(`Hi ${name} plz explain what is ${question}`)
        }
    }
    if(name == "kannu"){
        return function(question){
           console.log(`Hi ${name} plz explain what is ${question}`)
        }
    }
    else{
        return function(){
            console.log(`Hi Welcome to interview`)
        }
    }
}
//first way to call the HOF function
// interviewer("goutam")("HOF");
// interviewer("sahaj")("Full stack developer");
// interviewer("kannu")("js");

//second way
const candi1 = interviewer("goutam")
candi1("HOF");
candi1("Full stack developer");
candi1("js");

//--------------------------
//normal function 

// function a(){ 
//     console.log("mai hu a");
   
// }
// function b(){
//     console.log("mai hu b");

// }
// a()
// b()


//--------------------------

// function a(fn){//hof  //and this fn as b (means fn==b) that pass as a parameter  me catch kr liya in funtion a->  to (fn = b) 
//     console.log("i am a");
//     fn(); //calling is important for callback function
// }

// function b(){//callback function
//     console.log("i am b");
// }
// a(b);//Calling a with b as a callback  and pass as a arguments


//---------------------
//this is the process

// function a(fn){ //this whole fun is hof // and inside this fun (fn) is a callback function and iska name same bhi rkh skte hai bcz isko parameter me catch krege to (fn = b)
//     console.log("mai hu a");
//     fn();
// }

// a(function b(){//   Calling a with b as a callback fun
//     console.log("mai hu b")
// }); 

//------------------------
//when you pass the entire function as an argument in some other function it is called higher order function

// callback function -> 'b'
// the function which is being sent as an argument to some other function and there in called as well then it is a CALLBACK function.

//other way Higher order functions -> 'a'->when you return an entire function from some other function then the other function is your HOF


//------------------------

// function a(){
//     console.log("inside a")

//     function b(){
//         console.log("inside b")
//     }
//     return b; //you will have to return it function   
    
// }
// let temp = a(); //fun b, a ke ander hai jo ki return hua or temp me aaya to temp ko call kre ya b same hai
// temp()


//-------------------------

// ---- USE CASE -----

//  let arr = ['sam' , 100 , 'bhaukaal', true , 400 , false ]
//  function getString(arr){
//    let res = [];
//    for(let item of arr){
//     if(typeof(item) == 'string'){
//         res.push(item)
//     }
//    }
//    return res;
//  }

//  function getNumber(arr){
//     let res = [];
//     for(let item of arr){
//      if(typeof(item) == 'number'){
//          res.push(item)
//      }
//     }
//     return res;
//   }

//   function getBoolean(arr){
//     let res = [];
//     for(let item of arr){
//      if(typeof(item) == 'boolean'){
//          res.push(item)
//      }
//     }
//     return res;
//   }
//  console.log(getString(arr));//[ 'sam', 'bhaukaal' ]
//  console.log(getNumber(arr));//[ 100, 400 ]
//  console.log(getBoolean(arr));//[ true, false ]


// ---------- using HOF -----------


function getString(item){//callback fun
   return typeof(item) === 'string'//ydi array me string val present hogi to ye return true krega or res me push kr dega value otherwise it returns false
}

function getNumber(item){//callback fun
    return typeof(item) === 'number'
}
 
function getBoolean(item){//callback fun
    return typeof(item) === 'boolean'
}

let arr = ['sam' , 100 , 'bhaukaal', true , 400 , false ]

function get(arr,fn){//hof
    let res = [];
    for(let item of arr){
        if(fn(item)){
            res.push(item)
        }
    }
    return res;
}


console.log(get(arr , getString)) ;
console.log(get(arr , getNumber)) ;
console.log(get(arr , getBoolean)) ;



