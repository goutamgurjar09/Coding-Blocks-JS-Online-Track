function myFunc(){
   let user = "goutam"

   function masti(){
     console.log(user + " masti nahi")
   }
   masti()
}
myFunc();


// ------ Closure --------

// whenever we return a function , that function is never returned alone .
// it always returns with the lexical environment along with it and its called closure.

// function myFunc(){
//     let user = "goli beta" //lexical env.
 
//     function masti(){
//       console.log(user + " masti nahi")
//     }
//     return masti;
//  }
// let returnedFunc = myFunc(); // masti()
// returnedFunc()

