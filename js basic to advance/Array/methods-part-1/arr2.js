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

//------------------

// 2. pop() -> method -> Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.  
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


// -----------------

//3. unshift ->  Inserts new elements at the start of an array, and returns the new length of the array.

// let returnval = arr.unshift("samarth");
// console.log(arr)//[ 'samarth', 10, 20, 30, 40, 50 ]
// console.log(returnval) //6
// console.log(typeof returnval) //number


// -----------------

//4. shift ->  Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.  

// let returnval = arr.shift("samarth");
// console.log(arr)//[20, 30, 40, 50 ]
// console.log(returnval)//10 


// -------------------

//5.join ->Adds all the elements of an array into a string, separated by the specified separator string  by default values are ',' seperated

//let newValue = arr.join();//returns a string //10,20,30,40,50
//let newValue = arr.join('-->');//10-->20-->30-->40-->50
//let newValue = arr.join(' (^_^) '); //10 (^_^) 20 (^_^) 30 (^_^) 40 (^_^) 50
// let newValue = arr.join('    '); /10    20    30    40    50

// console.log(newValue)
// console.log(typeof newValue)//string



// ----------------------

//includes -> Determines whether an array includes a certain element, returning true or false as appropriate.

let arr1 = ['sam' , 'samarth' , [20] , ['sammy' , 'boi']]
// console.log(arr1.includes('sam')); //t
//console.log(arr1.includes('sa'));//f

// console.log(arr1.includes('boi'))//f  //bcz this is nested array ele. which doesn't consider 
// //In your code, arr1 is an array that contains a mix of strings and sub-arrays. When you use arr1.includes('boi'), JavaScript checks whether the top-level array arr1 contains the element 'boi'. It does not consider elements within nested arrays. In this case, 'boi' is inside a nested sub-array ['sammy', 'boi'], not at the top level of arr1. Therefore, arr1.includes('boi') will return false because it does not find 'boi' at the top level of the array.

// console.log( arr1.includes(['sammy' , 'boi']) );//f
//  The includes method in JavaScript is used to check if an array includes a specific element. When you use arr1.includes(['sammy', 'boi']), you are trying to check if arr1 contains the array ['sammy', 'boi'] as an element.
//  In this case, arr1 contains sub-arrays, including ['sammy', 'boi'], but it's important to understand that includes checks for strict equality. The ['sammy', 'boi'] array in the arr1 is a different array instance from the one you're trying to find, even though they have the same content. Since they are different instances, arr1.includes(['sammy', 'boi']) will return false because it's not an exact reference to the same array in arr1.

// console.log( arr1.includes("['sammy' , 'boi']") );//f


console.log( arr1.includes(20) ); //f
console.log( arr1.includes([20]) ); //f

//While the contents of the sub-array are the same, JavaScript considers them as different objects in memory, and therefore, arr1.includes([20]) returns false.




