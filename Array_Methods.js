//Array Methods
//1- toString()
let num = [1,2,3,4,5];
let b = num.toString() // b is now a string
console.log(b, typeof b);

//2-join()
let c = num.join("_");
console.log(c,typeof c);

//3-pop()
let r = num.pop(); 
console.log(num);//pop will pop an element 
console.log(r);// pop returns the popped element
 
//4-push()
let n = num.push(50); // push refers the new array length
console.log(num, n);
 
//5-shift()
let x = num.shift() //shift will remove first element
console.log(num, x);

//6-unShift()
let y = num.unshift(78); // add new array length at first position
console.log(num, y);

//7-delete() //this is  a operator
let marks = [ 10,89,75,69,29,64]
for(let k = 0; k<marks.length;k++)
{
    console.log(marks[k]);
}
console.log("Lenght is:- "+marks.length);
console.log("")
delete marks[3];
console.log("Array at 3 index:- "+marks[3] +",it Means element is deleted");
for(let k = 0; k<marks.length;k++)
{
    console.log(marks[k]);
}
console.log("Now Lenght is:- "+marks.length);// Array length will alway same
console.log("")
//8-concat()
//we can add two or more array using concat()
let num2 = [ 12,15,14,19,18,13];
let num3 = [ 26,24,29,27,23,28]; 
let num4 = [ 33,36,34,38,35,39,32,31];

console.log("Lenght is:- "+num2.length);
console.log("Lenght is:- "+num3.length);
console.log("Lenght is:- "+num4.length);

let num5 = num2.concat(num3);
let num6 = num3.concat(num4);
let num7 = num4.concat(num2);
let num8 = num2.concat(num3,num4); //we can add two or more array

console.log("Num 2 + num3:-"+num5);
console.log("Num 3 + num4:-"+num6);
console.log("Num 4 + num2:-"+num7);
console.log("Num 2 + num3 + num4:-"+num8);

console.log("Now Length is:- "+num8.length+"\n") // All the element comes new array.

//9-sort()
/*
    sort() takes an optional compare function. if this function is provided as thr first argument,
    the sort() function will consider these values(the values returned from the compare function) as the basis of sorting
*/
let compare =(a,b) =>{
    return a-b;
}
let numbers = [ 10,15,5,3,99,9,7,59,64]; //this is an unsorted array
numbers.sort(compare);
console.log("Sorted array is:- "+numbers);
//[3,5,7,9,10,15,59,64,99]

numbers.sort(); //sort()  method is used to sort an array Alphabetically
console.log("Sorted Array as a String:- "+numbers+"\n");
/*
[ 10,15,3,5,59,64,7,9,99 ]
*/

//10-reverse()
console.log("Original Array:- "+numbers);
numbers.reverse();
console.log("Reverse arrya:- "+numbers+"\n");

//11-splice() and slice()
//splice will help to add new item in array
let ar = [58,95,76,35,45,65];
let deleted_values = ar.splice(2,3,1021,1022,1023,1024);//you an add more element i.e- 1028,1029...etc
//('2:position to add','3: number of element remove', '1021,1022,1023: Element to be added')
console.log("Now array is:- "+ar);
console.log("Deleted value:- "+deleted_values);
console.log("Type is:- "+typeof ar+"\n");
 
//slice()
console.log("Original arrya:- "+ar)
let new_ar = ar.slice(3)
console.log("Print array form given index:- "+new_ar);

/*
    All JavaScript array methods:-
    JavaScript Array Methods
Let's see the list of JavaScript array methods with their description.

Methods	Description
concat()	It returns a new array object that contains two or more merged arrays.
copywithin()	It copies the part of the given array with its own elements and returns the modified array.
entries()	It creates an iterator object and a loop that iterates over each key/value pair.
every()	It determines whether all the elements of an array are satisfying the provided function conditions.
flat()	It creates a new array carrying sub-array elements concatenated recursively till the specified depth.
flatMap()	It maps all array elements via mapping function, then flattens the result into a new array.
fill()	It fills elements into an array with static values.
from()	It creates a new array carrying the exact copy of another array element.
filter()	It returns the new array containing the elements that pass the provided function conditions.
find()	It returns the value of the first element in the given array that satisfies the specified condition.
findIndex()	It returns the index value of the first element in the given array that satisfies the specified condition.
forEach()	It invokes the provided function once for each element of an array.
includes()	It checks whether the given array contains the specified element.
indexOf()	It searches the specified element in the given array and returns the index of the first match.
isArray()	It tests if the passed value ia an array.
join()	It joins the elements of an array as a string.
keys()	It creates an iterator object that contains only the keys of the array, then loops through these keys.
lastIndexOf()	It searches the specified element in the given array and returns the index of the last match.
map()	It calls the specified function for every array element and returns the new array
of()	It creates a new array from a variable number of arguments, holding any type of argument.
pop()	It removes and returns the last element of an array.
push()	It adds one or more elements to the end of an array.
reverse()	It reverses the elements of given array.
reduce(function, initial)	It executes a provided function for each value from left to right and reduces the array to a single value.
reduceRight()	It executes a provided function for each value from right to left and reduces the array to a single value.
some()	It determines if any element of the array passes the test of the implemented function.
shift()	It removes and returns the first element of an array.
slice()	It returns a new array containing the copy of the part of the given array.
sort()	It returns the element of the given array in a sorted order.
splice()	It add/remove elements to/from the given array.
toLocaleString()	It returns a string containing all the elements of a specified array.
toString()	It converts the elements of a specified array into string form, without affecting the original array.
unshift()	It adds one or more elements in the beginning of the given array.
values()	It creates a new iterator object carrying values for each index in the array.
*/