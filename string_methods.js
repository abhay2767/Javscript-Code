let name = "Abhay Dubey";
console.log("String name and Length is: "+name+" "+name.length);
console.log("String convert lower to upper case:- "+name.toUpperCase());
console.log("String convert upper to lower case:- "+name.toLowerCase());
console.log("String between by given index:- "+name.slice(2,8));
console.log("String from given index:- "+name.slice(4));

console.log("Orignal name is:- "+name+" and now name is:- "+name.replace("Dubey","Bhai"));

let friend = "Lokesh";
console.log(name.concat(" is a friend of ", friend, " ok"));

let text = " Hello! How are you       ";
console.log(text.trim());


let fr = "Abhay";
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);
console.log(fr[3]);
console.log(fr[4]);

let Student = "Pooja";
for(let i=0;i<Student.length;i++)
{
    console.log(Student[i]);
}

/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()

*/