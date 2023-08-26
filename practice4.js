//Wap to print length
console.log("har\"".length);

//Wap to explore the includes, startswith, endswith function of a string.
const sentence ='The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));

//Extract the amount out of the string
//      "Please give Rs 1000";
let str = "Please give Rs 1000";
let amount = Number.parseInt(str.slice(15));
console.log(amount);
console.log(typeof amount);

//Try to change 4th charcter of a given string were you able to do it.------No
let words = "Deepka"; 
words[3] = "R";
console.log(words);
//words will not change because String is immutable
