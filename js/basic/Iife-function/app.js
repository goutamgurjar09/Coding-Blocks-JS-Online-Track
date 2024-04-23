//An iife stands for Immediately Invoked Function Expression.
// It is a js function that is executed/runs immediately as soon as it is defined

(function(){
    console.log("this is IIFE function");
})();

(function (){
    console.log("this is IIFE function");
})();

((name) =>{
    console.log(`${name} this is another IIFE function`);
})('goutam');

//Use case:
//global scope ke polution se problem hoti hai kai baar to us global scope ke variables ko htane ke liye IIFE ka use krte hai
//Note- ; sami-colon lgana pdega ydi nhi lgaoge to next iife function  execute nhi hoga error dega