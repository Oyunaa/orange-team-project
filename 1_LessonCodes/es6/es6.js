// //ES5
// const contacts = {
//   name: "Jim",
//   familyName: "Dune",
//   age: 22,
// };

// let name = contacts.name;
// let familyName = contacts.familyName;
// let myAge = contacts.age;

// let arr1 = ["one", "two"];
// let arr2 = [...arr1, "three", "four", "five"];
// console.log(arr2);

//ES6
const contacts = {
  name: "Jim",
  familyName: "Dune",
  age: 22,
  address: {
    details: { streetName: "Gudamj", streetNo: 1 },
    country: "Mongolia",
    city: "UB",
  },
};

let det = contacts.address.details.streetName;

let {
  name,
  address: {
    details: { streetName },
    city,
  },
} = contacts;

console.log(streetName);
console.log(city);

let arrObj = [
  { id: 1, title: "Desc", desc: "desc" },
  { id: 2, title: "qwe", desc: "re" },
];

// let {id, title} = c
arrObj.map(({ id, title }, index) => {
  let aa = `${id} + ${title}`;

  console.log(aa);
});

for ({ id, title } of arrObj) {
  console.log(id, title);
}

let scores = [80, 90, 70];

for (let score of scores) {
  score = score + 5;
  console.log(score); // 85, 95, 75
}

arrObj.forEach((c) => console.log(c));

// // Example 1
// let ranks = [1, 5, 7, 8, 10, 7];
// let index = ranks.findIndex((rank) => rank === 7);
// console.log(index); // 2

// Example 2
let ranks = [1, 5, 7, 8, 10, 7];
let index = ranks.findIndex((rank, index) => rank === 7 && index > 2);
console.log(index); // 5

let ind = arrObj.findIndex((c) => c.id == 1);

console.log(ind);

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

let arr1 = ["one", "two"];
let arr2 = [...arr1, [...arr1, "three", "four", "five"]];
console.log(arr2);
// ["one", "two", "three", "four", "five"]
