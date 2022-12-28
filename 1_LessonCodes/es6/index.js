let arr1 = ["one", "two"];
let arr2 = [...arr1, "three", "four", "five"];
console.log(arr2);




// ["one", "two", "three", "four", "five"]
function show(a, b, ...args) {
  console.log(a); // one
  console.log(b); // two
  console.log(args); // ["three", "four", "five", "six"]
}

show("one", "two", "three", "four", "five", "six");

function f(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(f(1, 2, "hello", true, 7) === 9);

function nameFun(...a) {
  // console.log(a);
  let total = 0;
  for (let aa of a) {
    total += aa;
  }
  console.log(total);
  return total;
}

nameFun(2, 3, 4, 5);

[2, 3, 4, 67.9].forEach((element) => {
  console.log(element);
});

// Example 1
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex((rank) => rank === 7);
console.log(index); // 2

// Example 2
// let ranks = [1, 5, 7, 8, 10, 7];
// let index = ranks.findIndex((rank, index) => rank === 7 && index > 2);
// console.log(index); // 5

let rankObj = [
  { id: 1, name: "haha" },
  { id: 2, name: "hehe" },
];

let b = rankObj.findIndex((rank) => rank.id == 1);
console.log(b);

//ES5
// const contacts = {
//   name: "Jim",
//   familyName: "Dune",
//   age: 22,
// };

// let name = contacts.name;
// let familyName = contacts.familyName;
// let myAge = contacts.age;

//ES6
const contacts = {
  name: "Jim",
  familyName: "Dune",
  age: 22,
};

let { name, familyName, age } = contacts;

const employee = {
  id: 007,
  name: "James",
  dept: {
    id: "D001",
    name: "Spy",
    address: {
      street: "30 Wellington Square",
      city: "Chelsea",
    },
  },
};

const { dept } = employee;

const {
  dept: { address },
} = employee;
console.log(address);

const obj = { nameL: "Moses", age: 120, country: "Egypt" };
const { nameL, country, ...rest } = obj;
console.log(nameL); // "Moses"
console.log(rest); // {age: 120, country: “Egypt”}

for (let { id, name } of rankObj) {
  console.log(`of - ${name} is ${id} years old!!!`);
}

rankObj.map(({ name, id }) => {
  console.log(`map - ${name} is ${id} years old!!!`);
});
