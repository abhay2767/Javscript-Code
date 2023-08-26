//Primitive Data_Type:- NN, BB, SS, U{Null,Number, BigInt,Boolean,String, Symbol, Undefined}
let a = null;
let b = 255;
let c = BigInt("2767");
let d = true;
let e = "Abhay";
let f = Symbol("This is a symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g);
console.log(typeof f);//check variable DataType.

//Objects:- Not Premitive Data Type
//Object is used to MAp the data
const item ={"Abhay": true,
             "Sachin": false,
             "Rajat": 67,
             "Anshu": undefined               
}
console.log(item["Abhay"]);
console.log(item["Anshu"]);