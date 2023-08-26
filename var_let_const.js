console.log("JavaScript var, let, const");
console.log("'var' Example");
var a = 15;
var a = "Dube"
var b = 'A';
var c = "Abhay";
var d = null;
var e = undefined;
{
    var b = 'This'
    console.log(b);
}
console.log("a = "+a);
console.log("b = "+b);
console.log("c = "+c);
console.log("d = "+d);
console.log("e = "+e);
/* Disadvantage:
                1- We can re-declare varable using var.
                2- We can change the value of variable.
*/
/* Alway use 'let' and 'const' Never use 'var'*/
console.log("'let' Exmaple");
let A = 155;
A = 255;
let C = undefined;
//console.log(C); //this will not print
//let A = 'A';
{
    let A = 200;
    let Z = undefined;
    console.log("A = "+A);
}
console.log("A = "+A);
//console.log(Z); show error
//Note we can not re-declare variable using let
/*Disadvantage:-
                1- We can change the value of variable using 'let' in other scope.
*/

console.log("'const' Example");
const B = 88;
console.log(B);
{
    const B = 100;
   // B= 500;
    console.log(B);
}
/*Disadvantage:
            1- Here also we can change the value of variable using 'const' in other scope
*/
/*Note:-
        'var' is Globaly scoped  while 'let' and 'const' are block scoped.
        'var' can be updated & re-declared using its scope
        'let' can be updated but not re-declared.
        'const' can neither be updated nor be re-declared
        'var' can be initialized with Undefined  wheraas 'let' and 'const' can not Initialized with undefined.
        'const' must be initialized during declaration  unlike 'let' and 'var'

*/