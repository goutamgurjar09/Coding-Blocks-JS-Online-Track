// for(i=0; i<=10; i++){
//   //  for(let i=0; i<=10; i++)
//     console.log(i);
// }

// -----------------------

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }


// ---------- FOR-OF loop------------

let arr = [1,2,3,4,5]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//for-of
// for(let ele of arr){
//     //console.log(arr[ele]);//wrong //->2 3 4 5 undef.
//    //ele->iterator i.e arr[i]
//     console.log(ele)
// }


// ---------- FOR-IN ----------

for(let ele in arr){
   // console.log(ele)
    //console.log(arr[ele])
}

// objects

let obj = {
    english : 80,
    hindi : 99,
    math : 30
}
for(let sub in obj){
    // console.log(sub) //key
    // console.log(obj[sub]) //key-value
   // console.log(obj.sub); //undefined
   //console.log(obj.english);//80 

}

//Note:- In the loop, when you use obj.english, it correctly accesses the english property of the obj object, which has a value of 80. This is why you see 80 printed in the loop.

// However, when you try to access obj.sub, it doesn't work as expected because sub is a variable holding the key during each iteration of the loop.



// ---------------------------------

//break-continue

// for(let i=1; i<=10; i++){
//    if(i == 5){
//     break;
//    }
//    console.log(i);//1 2 3 4
// }


// for(let i=1; i<=10; i++){
//     if(i == 5){
//      continue;
//     }
//     console.log(i);//1 2 3 4 6 7 8 9 10
//  }


