let marks = [89,59,67,92,76];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
for(let i =0; i<marks.length;i++)
{
    console.log(marks[i]);
}

//JavaScript arrays are resizable and can contain a mix of different data types
let arr = [15,48,"Abhay",false,true,'A',58.5];
console.log(arr[6]);
console.log("length is:- "+arr.length);
console.log(arr[7]); //will be 'undefined' because index 7 does not exist

arr[7] = 100;// Adding a new value to the array
console.log(arr[7]);
console.log("Now length is:- "+arr.length);

arr[2] = "Dubey";//Changing the value of the array 
//Arrays are mutable we can changhe and Strings are inmumtable we can not change.
console.log(arr[2]);

console.log(typeof arr); //Array is a object type.
console.log("\n");

//print all element off arr Array
for(let j =0 ;j<arr.length;j++)
{
    console.log(arr[j]);
}