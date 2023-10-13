let arr = [10,20,30,40,50];

//1. length -> property 
// console.log(arr.length)//5

//--------------------
//Methods of array

//1.push() -> Appends new elements to the end of an array, and returns the new length of the array.
// console.log(arr.push())//5 ->if you direct push then it return length  
// console.log(arr.push(200))//6

// arr.push(8);
// console.log(arr)//[ 10, 20, 30, 40, 50, 8 ]
// console.log(arr.length)//6

// --- multiple value -----

// arr.push(60 , "sam" , 80,100); //add last me
// console.log(arr)  //[10,20,30,40,50, 60,'sam', 80, 100]
// console.log(arr.length);//9

// 3. pop() -> method -> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.  
// arr.pop()
// console.log(arr)//[ 10, 20, 30, 40 ]
// console.log(arr.length)//4

// arr.pop(40); //no need of argument alwasy remove last element
// console.log(arr)

// ----- return types -----

// let ans = arr.pop();
// let ans2 = arr.push(400);
// console.log(ans);//50
// console.log(arr);//[ 10, 20, 30, 40, 400 ]
// console.log(ans2);//5