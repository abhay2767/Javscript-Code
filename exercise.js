const arr = ["BMW", "volvo", "Audi"];

console.log(arr);
/* Showing Error because you can not reassigned array while declaring array using 'const'
arr = ["Mauti", "Volvo", "Mahindhra"]
console.log(arr);
*/
//You can reassigned element
arr[0] = "Honda";
console.log(arr);