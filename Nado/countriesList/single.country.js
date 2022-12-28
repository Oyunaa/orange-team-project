let lc = window.location;

const params = new URLSearchParams(lc.search);

// console.log(params);

const countryNameUrl = params.get("countryname");

fillData()

let countryData = [];

async function fillData() {
    await fetch(`https://restcountries.com/v2/name/${countryNameUrl}`)
        .then((response) => response.json())
        .then((data) => {
            countryData = [...data];
        })
        .catch((err) => console.log(err));
    writeInnerHTML()
}

let section = document.getElementById("sec1");

let a = countryData[0];

function writeInnerHTML() {
    section.innerHTML = `<img src="${countryData[0].flag}" alt="flag" width="100px">
    <div>name: ${countryNameUrl}</div>
    <div>capital:  ${countryData[0].capital}</div>
    <div>alpha3Code:  ${countryData[0].alpha3Code}</div>
    <div>area:  ${countryData[0].area}</div>
    <div>currencies:  ${countryData[0].currencies[0].name}</div>
    <div>languages:  ${countryData[0].languages[0].name}</div>  
    <div>population:  ${countryData[0].population}</div>
    <div>region:  ${countryData[0].region}</div>
    <div>subregion:  ${countryData[0].subregion}</div>
    <div>timezones:  ${countryData[0].timezones[0]}</div>`
}



