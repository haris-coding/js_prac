console.log("helloword");
//we can write comment using the double slash
/*and for
multiple line coment*/

// expression a+b
// here a,b are operand and + is operator

// arithmetic operators
let a = 90;
let b = 89;
console.log("a=90 , b=89");
console.log("a+b=", a + b);
console.log("a*b=", a * b);
console.log("a-b=", a - b);
// //modulus operator
console.log("a%b=", a % b);
// //exponent operator
console.log("a**b=", a ** b);
// //uniary operator
console.log("a++ = ", a++);
console.log("a-- = ", a--);

//assignment operator
// = , += , -= ,

a *= b;
console.log(a);

//comparision operators
//== , != , >= , <=

console.log(a == b);

//logical operators
// && ,|| , !

console.log(a > b && a === 5);

//ternary operator
let age = 18;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);
//conditional statement
// grade calculator

let n = prompt("enter your score");
if (n <= 100 && n >= 90) {
  console.log("A");
} else if (n < 90 && n >= 80) {
  console.log("B");
} else if (n < 80 && n >= 70) {
  console.log("C");
} else if (n < 70 && n >= 60) {
  console.log("D");
} else if (n < 60 && n >= 0) {
  console.log("F");
} else {
  console.log("invalid");
}
