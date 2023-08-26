//Create a variable of type string and try to add a number to it.
let s = "Abhay";
let a = 8;
console.log(s);
//console.log(a + s);
// now we try to add number on same variable.
s = 2;
console.log(s);
 
//Use 'typeof' to find the datatype of the string.
console.log(typeof s);
//console.log(typeof (a+s));

//create a object to hold and store name, phone numberand marks of a student.
const student = {"Name": "Abhay Dubey",
                "Phone_No": 8859022825,
                "Marks": 486
}
console.log(student["Name"]);
console.log(student["Name","Phone_No"]); //here only one thing will print which is write in LAst ie- 'Phone_No'

//create a const object, can you change it to hold a number later.
const obj= {
    X: "Dubey ji",
    Y: "Abhay ji"
}
console.log(obj);
/*
console.log(obj["X"]);
//obj = "Abhay Dubey ji";
obj = 58;
console.log(obj);
//No we can hold the numner later
*/

//Try to add a new key  to const object  in Q-3 were adle to do it.
obj['friend'] = "Lokesh"
obj['Name'] = "kapil"
console.log(obj);
//Yes we can add new key.
//obj = {"C" : "Ramesh"}
//but we can not add any object in const object.

obj['number'] = 50;
//also we can not add Number in const object

//create a word meaning  of dictnary of 5 words.
const dics = {Athleisure: "Comfortable and casual footwear & clothing designed for exercise and rigorous activity.",
              Broigus: "Angry or irritated",
              By_Catch: "A catch ofsṇ fish that cannot be put to commercial use.",
              Blert: "A cowardly person, someone who is weak.",
              Efface: "To remove, typically by erasing or rubbing. "
}
console.log(dics.Blert);
console.log(dics.Broigus);
console.log(dics['Athleisure']);
//means you can print the data using Object'.' key