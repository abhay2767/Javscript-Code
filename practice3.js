//WAP to print the marks of the Student using 'for loop'
//1- way using Array and 'for loop'
const Student = {
            Abhay_Marks : 58,
            Kapil_Marks : 52,
            Lolesh_Marks : 83,
            Harsh_Marks : 56
}
for(let i =0; i<Object.keys(Student).length;i++)
{
    console.log("The Marks of "+Object.keys(Student)[i]+"are "+Student[Object.keys(Student)[i]]);
}
//WAP to solve Q-1 using 'for in loop'
//2- way using 'for in loop'
for(let i in Student)
{
    console.log(i+ ": "+ Student[i]);
}

//WAP to print 'try again' ntill the user enters the corent number.
/* //Run the Program on Chrom console
let cn = 27;
let i;

while(i != cn)
{
    i = prompt("Enter the Number");
    console.log("Try again");
}
console.log("Yes! COngress, You have entered the right Number");
*/
//write a funtion to find mean of 5 numbers
// i.e-mean=sum of numbers / total numbers. =4+5+7+8/4. = 24/4.
const mean = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5
}
console.log("Mean of 6 Number is: "+mean(4,6,2,8,7));