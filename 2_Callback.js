//Callback
function greet(name, callback){
    console.log("Hello Mr. "+name)
    callback()
  }
  function wish(){
    console.log("Good Morning")
  }
  
  greet("Abhay", wish)
//Here wish() is a callback function which is passed in function as parameter