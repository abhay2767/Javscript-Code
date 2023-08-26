/*
//Write a program to take a user input and check the given is number is less than or greater than 18.
//if the less than 18 than show an alert box that "You can not Drive" otherwise "You can drive" if the age > 18.
//and if age is in negative than show an error that "Enter Valid Age"
//and al last ask user to confirm that do you want to play again or not. 

let RunAgain = true;
const CanDrive = (age) => {
    return age >= 18 ? true : false
  }
//if (age > 18)  //Direct method
//using function

while (RunAgain) {

let age = prompt("Enter age");
age = Number.parseInt(age);
if(age<0)
{
  console.error("Please enter valid age");
  break;
}
  
  if (CanDrive(age)) {
    alert("You can drive");
  }
  else {
    alert("You can not drive");
  }
  RunAgain = confirm("Do you want to play again")
}
*/

/*
//Write a program to take user input and check the given number is equal to 4 than open "Google"
//other wise show alert box "Please try again" after than open a confirm box than ask the user "Try again."
let Run = true;
while(Run)
  {
    let num = prompt("Enter number greater than 4 to goto Google");
    num = Number.parseInt(num);
    if(num > 4)
    {
      location.href= "https://www.google.com/"
      break;
    }
    else{
      alert("Try again");
      Run = confirm("Do you want to try again");
    }
  }
*/

/*
//Change the color according to user input
let color = prompt("Enter Color Name");
document.body.style.background = color;
*/