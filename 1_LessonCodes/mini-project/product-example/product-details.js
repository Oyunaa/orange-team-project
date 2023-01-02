console.log(window.location);
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const product = urlParams.get("id");
console.log(product);

fetch(`https://dummyjson.com/products/${product}`)
  .then((res) => res.json())
  .then(console.log);

fetch("https://dummyjson.com/products/1", {
  method: "DELETE",
})
  .then((res) => res.json())
  .then(console.log);

// let car = document.getElementsByClassName("carousel");
// console.log(car);
// car[0].carousel();
