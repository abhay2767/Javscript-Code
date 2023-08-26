let num = [58,65,42,39,46,91,38];
//Classical for loop
for(let k = 0; k<num.length;k++)
{
    console.log("Value at index:- "+k+" = "+num[k]);
}
//for each loop
//num.forEach((value,index, array)=>{});
num.forEach((element)=>{
    console.log(element);
});

//Array.from 
//used to create an array from any other object
//i.e- Array.from("Abhay");
//now [ 'A', 'b', 'h', 'a', 'y' ] here 'A' is first element and 'b' is secand element, and so on
let name ="Abhay";
let arr = Array.from(name);
console.log(arr);

//for of loop
for(let i of num)
{
    console.log(i);
}

//for in loop
for(let j in num)
{
    console.log(j," = "+num[j]);
}