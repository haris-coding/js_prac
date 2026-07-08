//string built in methods
str = "haris";
console.log(str.toUpperCase());
str.toLowerCase();
//Write a JavaScript program using a for loop that prints all even numbers from 1 to 20 to the console.

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

let str1 = prompt("enter your name :");
let newname = str1.trim();
console.log(newname.toLowerCase(), " the length is ", newname.length);
