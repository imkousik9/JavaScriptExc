let name = "Tom";
console.log(name);
name = 20;

let score = 100;
let bonus = 20;

var comlex = (((4 + 4) * 5) / 2);

let totalScore = (score + bonus);
console.log(name);

console.log(totalScore);

let firstName = "John";
let lastName = "Doe";
let fullNmae = firstName + "**" + lastName;
console.log(firstName + " " + lastName);
console.log(fullNmae);

//console.log(myvar); // undefined
//let myvar = 'local value';

const arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
