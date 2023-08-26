console.time('Your code took');
console.log('Hello Console');
console.log(10 + 10);
console.log(30);
console.log(true);
console.log([10, 20, 50, 70, 80, 90])
console.log({ Abhay: 'this', marks: 34 })
console.table({ Abhay: 'this', marks: 34 })
console.warn('This is wwarning');
//console.clear()
console.timeEnd('Your code took');
//console.assert(566<189, 'This is not possible if age > 189')
console.error('This is error')

function add(a,b)
{
    return a+b;
}
let c = add(2,2)
console.log(c)