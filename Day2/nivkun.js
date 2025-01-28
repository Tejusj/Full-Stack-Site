console.log("Hello, World!");
console.log(document);

var a=10;
let b=20;
const c=30;

if(true){
    var a =40;
    let b =50;
}
console.log(a);
console.log(b);
let name  = "Alice";
let age = 20;
let isStudent = true;
let score = null; // Null
let city; // Undefined
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof score); // Output: object (quirk of JS)
console.log(typeof city); // Output: undefined
function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3));
  let age2 = 20;
if (age2 >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  default:
    console.log("Needs Improvement");
}

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);
let text = "The rain in Spain falls mainly";
let pattern = /rain/;
if(pattern.test(text)) {
    console.log("Match found");
}
console.log(pattern.test(text)); // true
console.log(text.match(pattern)); // ['rain']

