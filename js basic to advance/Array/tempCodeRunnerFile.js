console.log(arr1.includes('boi'))//f  //bcz this is nested array ele. which doesn't consider 
// //In your code, arr1 is an array that contains a mix of strings and sub-arrays. When you use arr1.includes('boi'), JavaScript checks whether the top-level array arr1 contains the element 'boi'. It does not consider elements within nested arrays. In this case, 'boi' is inside a nested sub-array ['sammy', 'boi'], not at the top level of arr1. Therefore, arr1.includes('boi') will return false because it does not find 'boi' at the top level of the array.

// console.log( arr.includes(['sammy' , 'boi']) );//f
// // The includes method in JavaScript is used to check if an array includes a specific element. When you use arr1.includes(['sammy', 'boi']), you are trying to check if arr1 contains the array ['sammy', 'boi'] as an element.
// // In this case, arr1 contains sub-arrays, including ['sammy', 'boi'], but it's important to understand that includes checks for strict equality. The ['sammy', 'boi'] array in the arr1 is a different array instance from the one you're trying to find, even though they have the same content. Since they are different instances, arr1.includes(['sammy', 'boi']) will return false because it's not an exact reference to the same array in arr1.

// console.log( arr.includes("['sammy' , 'boi']") );//f
