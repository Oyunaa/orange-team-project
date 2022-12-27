let lc = window.location;
console.log(lc);
console.log(lc.search);

const params = new URLSearchParams(lc.search);

console.log(params);

const q = params.get("countryname");
const regionUrl = params.get("region");

console.log(q);

console.log(regionUrl);
fillData()
//https://restcountries.com/v3.1/name
function fillData() {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        countriesData = [...data];
        console.log(countriesData);
        fill(q)
      })
      .catch((err) => console.log(err));
  }
let info = document.getElementById("info")
  function fill(q) {
    let row;
    for (let i = 0; i < countriesData.length; i++) {
        if (q == `'${countriesData[i].name.common}'`) {
            row+= `<div>${countriesData[i].capital}</div>
            <div>${countriesData[i].continents}</div>
            <div>${countriesData[i].currencies.XCD.name}</div>
            <div>${countriesData[i].flags.png}</div>
            <div>${countriesData[i].languages.eng}</div>
            <div>${countriesData[i].maps.googleMaps}</div>
            <div>${countriesData[i].population}</div>
            <div>${countriesData[i].timezones[0]}</div>`   
    }else{
        console.log("wrong");
    }
    info.innerHTML = row
    }
}
