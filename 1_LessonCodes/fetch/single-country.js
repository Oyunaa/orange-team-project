let lc = window.location;
console.log(lc);
console.log(lc.search);

const params = new URLSearchParams(lc.search);

// console.log(params);

const q = params.get("countryname");
const regionUrl = params.get("region");

console.log(q);

console.log(regionUrl);

//https://restcountries.com/v3.1/name/Mongolia
