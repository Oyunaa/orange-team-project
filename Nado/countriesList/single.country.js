let lc = window.location;
console.log(lc);
console.log(lc.search);

const params = new URLSearchParams(lc.search);

// console.log(params);

const countryNameUrl = params.get("countryname");
const regionUrl = params.get("region");

console.log(countryNameUrl);

console.log(regionUrl);

//https://restcountries.com/v3.1/name

fillData()

let countrieData = [];

function fillData() {
    fetch(`https://restcountries.com/v2/name/${countryNameUrl}`)
        .then((response) => response.json())
        .then((data) => {
            countrieData = [...data];
        })
        .catch((err) => console.log(err));
}


