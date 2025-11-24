// -----------------------------
// 1. Template Literals + Expressions
// -----------------------------
console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `Hello,
This is a
three-line string.`;
console.log(multiLine);

const firstName = "John", lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);


// -----------------------------
// 2. Arrow Functions & this
// -----------------------------
const square = n => n * n;
console.log(square(5));

// why logs undefined
// Because arrow functions do NOT have their own `this` — they take `this` from their surrounding scope
const obj = {
  value: 50,
  test: () => console.log(this.value) // undefined
};
obj.test();

// correct version
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test();


// -----------------------------
// 3. Rest, Spread & Copying Objects
// -----------------------------
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const mergedObj = { ...a, ...b };
console.log(mergedObj);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(4, 9, 2, 1));


// -----------------------------
// 4. Destructuring & Optional Chaining
// -----------------------------
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.address?.city); // undefined safely


// -----------------------------
// 5. Scoping (let/var/const)
// -----------------------------
for (var i = 0; i < 3; i++) {}
console.log(i);  // prints 3

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// const used for values that must not be reassigned
// It prevents accidental modification.


// -----------------------------
// 6. Ternary Operator – Practice
// -----------------------------
let speed = kmph > 60 ? "Fast" : "Normal";

const resultAge = age => age >= 18 ? "Adult" : "Minor";
console.log(resultAge(20));

const checkNumber = num =>
  num > 0 ? "Positive" :
  num === 0 ? "Zero" : "Negative";
console.log(checkNumber(-2));


// -----------------------------
// 7. Spread, Rest & Arrays
// -----------------------------
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

const aArr = ["x", "y"];
const bArr = ["z"];
const combined = [...aArr, ...bArr];
console.log(combined);

const printNames = (...args) => args;
console.log(printNames("A", "B", "C"));


// -----------------------------
// 8. Object Destructuring & Shorthand
// -----------------------------
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const role = "admin";
const user2 = { id, role };
console.log(user2);

const name = "Ram", age2 = 22;
const person = {
  name,
  age2,
  greet() {
    return `Hello ${name}`;
  }
};
console.log(person.greet());


// -----------------------------
// 9. Template Literals (More Practice)
// -----------------------------
console.log(`Today's date: ${new Date().toDateString()}`);

const NAME = "Aman", SCORE = 92;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);


// -----------------------------
// 10. Arrow Function Shorthands
// -----------------------------
const add = (x, y) => x + y;
console.log(add(3, 7));

const isAdult = age => age >= 18;
console.log(isAdult(16));

const double = n => n * n;
console.log(double(6));


// -----------------------------
// 11. Spread Operator (Arrays & Objects)
// -----------------------------
const arrClone = [...nums];
console.log(arrClone);

const arrWith100 = [100, ...nums];
console.log(arrWith100);

const objA = { x: 10, y: 20 };
const objB = { y: 99, z: 50 };
const mergedOverride = { ...objA, ...objB };
console.log(mergedOverride);


// -----------------------------
// 12. Optional Chaining (More Practice)
// -----------------------------
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user3?.address?.city);

console.log(user3?.job?.title); // undefined

const safeDemo = {};
console.log(safeDemo?.profile?.email); // prevents runtime error
