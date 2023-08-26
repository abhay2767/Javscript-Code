
function MyFunction(a,b,c)
{
    return 1+(a+b)/2;
    //return Math.round(a+b)/2;
}
let x = 50, y = 90, z = 60;
console.log("Average of x and y is: "+MyFunction(x,y));
console.log("Average of y and z is: "+MyFunction(y,z));
console.log("Average of z and x is: "+MyFunction(z,x));
console.log("Abhay")

//Another way to create Function this is also calls Arrow Function
const sum = (p,q)=>
{
    return p+q;
}
console.log("Sum of p and q is: "+sum(10,20));

//Another way to create function wwithout passing Argument
function Hello()
{
    console.log("Hello! How are you");
}
Hello();