//Synchronous programming(Execute line by line)
/* let name = prompt("What is your name")
let age = prompt("What is your age")
let color = prompt("What is your favorite color")
console.log(name + " is " + age + " years old and has " + color + " favorite color.") */

//Asynchronous programming(Execute by given set of time)
console.log("Start")
setTimeout(function() {
  console.log("Hey, I am a Asynchronous programming")
}, 3000)
console.log("End")

