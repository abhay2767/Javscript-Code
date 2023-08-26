//Array map()
let arr = [21,23,25,26,27]
//creates an new array by performing some operation on each array element

let ar = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value+1;//operation
});
console.log(ar+"\n")
 
//Array filter()
//filters an array with values that passes a test, creates a new array i.e:- et a2 = arr1.filter((a)=>{return a<10});
let arr1 = [58,68,36,3,75,34, 8, 9 ,6];
console.log("All element" +arr1)
let a2 = arr1.filter((a)=>{
    return a<10
});
console.log("Values less than 10 is:- "+a2);
console.log("original array: "+arr1+" ");//this will not modify original array

//Array reduce()
//reduce an array to a single value
let arr3 = [1,2,3,4,5];
let new_arr3 = arr3.reduce((h1,h2)=>{
    return h1+h2;
})
/*
return h1+h2 means,
//here h1, h2 = 1, 2
    1+2 = 3
    3+3 = 6
    6+4 = 10
    10+5 = 15
    so 15 will print
*/
console.log(new_arr3);