//hoiseting
// fun();
// console.log(a);   //undefined
// var a =10;

// function fun(){
//     console.log("fun value: "+ a); //undefined
// }

//----------------
//Using let
fun();
console.log(a);
let a =10;

function fun(){
    console.log("fun value: "+ a);  //app.js:16  Uncaught ReferenceError: Cannot access 'a' before initialization
}


//----------
//Note So jb bhi hm kise /function ko let/const se declare krte hai to bo apna ek alg hi scope bna leta hai  Globel scope ke Uper Script ke ander jha pr value unavailable hoti hai means use access nhi kr skte   see on console source tab  ->Script a: <value unavailable>  

//Note: So jb bhi hm kise variable ko let/const se declare krte hai to bo Globel scope me memory allocate na krke bo  apna ek alg khud ka scope bna lete hai  Jise Temporal Dead Zone khte hai
//Note: And if you try to access this variable from Temporal Zone then you will get an error on console


//-----------------------------

