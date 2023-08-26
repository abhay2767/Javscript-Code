//Create an array of number  and take the input form user until 0 is not entered and store in array
/*let arr = [1,2,3,4,5];
console.log("Original Array is:- "+arr)
let num;
do{
    
    num = prompt("Enter the Number");
    num = Number.parseInt(num) //convert string to number
    arr.push(num);
    num = Number.parseInt(num) //convert string to number
    console.log("New Array is:- "+arr);
}while(num != 0);
*/
//filter for numbers  deivisble by 10 from a given array
let arr= [ 10,56,15,20,30,26,27,90];
let n = arr.filter((func) =>{
    return func%10 == 0
});
console.log(n+"\n")

//Create an array of square of given number
let arr1= [ 10,56,15,20,30,26,27,90];
console.log("Original is: "+arr1)
let n1 = arr1.map((func) =>{
    return func*func
});
console.log("Square is: "+n1)

//Use reduce  to calculate factorial  of a given number  from an array  of first  n natural number.
//(n being  the number  whose factorila needs  to be calculated)
let arr3 = [1,2,3,4,5,6];
let n2 = arr3.reduce((x1,x2)=>{
    return x1*x2;
});
console.log("Facrorial is:- "+n2);