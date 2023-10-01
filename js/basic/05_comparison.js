// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 == 1)
// console.log(2 < 1);
// console.log(2 <= 1)

// console.log("2" > 1) //true
// console.log("02" >= 1)//true

// console.log(null > 0);//false
// console.log(null >= 0);//true
// console.log(null == 0);//false

// console.log(undefined == 0)
// console.log(undefined <= 0)
// console.log(undefined > 0)

//=== check value and datatype both
// console.log("2" === 1)
// console.log("02" === 1)

// let score = 100
// let ans = score==100//true
// ans = score==200//false
// console.log(ans);
// console.log(typeof ans);


// let score = 100
// let score2 = "100"

// let ans = score==100
// let ans2 = score2===100 //bcz string hai
// console.log(ans);//true
// console.log(ans2);//false

// -----------------------------------
//<= , >= , > , < 
// let sam = 20
// let gurjar = 10
// let ans = sam >= gurjar//true
//  ans = sam <= gurjar//false
// console.log(ans);


// --------------------------
let n1 = 100
let n2 = -1
let n3 = true
let n4 = 0
let n5 = false

let ans = n1==n2//false
ans = n3 + n5//-> true  + false -> 1 + 0 - > 1
ans = n3/n5//-> true  / false -> 1 / 0 - > infinite
ans = n5/n3//-> false  / true -> 0 / 1 - > 0
ans = n5/n4// false -> 0 / 0 - > NAN -> not a number
console.log(ans);
