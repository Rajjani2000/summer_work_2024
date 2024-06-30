// Literal notation
let arr1 = ["first","Second", "Third"];

// Constructor notation
let arr2 = new Array("1","2","3");

console.log(arr1);
console.log(arr2);

// Adding element
 arr1.push("Four");
console.log("After Pushing ",arr1);
arr2.unshift("0");
console.log("After unshifting",arr2);

// Removing an element
arr1.pop()
console.log("Afetr poping",arr1);
arr2.shift()
console.log("After shifting",arr2);

//Checking the Length
var le = arr1.length;
console.log("Length of the Array is ",le);

//Accesing the element
var ac1 = arr1[0];
console.log("Index 0 of Array is ",ac1);
