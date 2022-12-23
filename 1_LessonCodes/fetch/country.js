let sec1 = document.getElementById("section1");
let sec2 = document.getElementById("section2");
let select = document.getElementById("region");

let input = document.getElementById("searchTxt");

let countriesData = [];

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    let row = "";
    data.map((country) => {
      row += `<div> <p> ${country.name.common}</p></div>`;
    });

    countriesData = [...data];

    sec2.innerHTML = row;

    fillRegion();

    // console.log(data);

    // sec2;
  })
  .catch((err) => console.log(err));

// for (let a of data) {
//   console.log(a.name);
// }

function fillRegion() {
  let arrRegion = [];
  countriesData.map((c) => {
    if (!arrRegion.includes(c.region)) {
      arrRegion.push(c.region);
    }
  });
  for (let i = 0; i < arrRegion.length; i++) {
    select.innerHTML += `<option value="${arrRegion[i]}">${arrRegion[i]}</option>`;
  }
}

select.addEventListener("change", (event) => {
  console.log(event.target.value);

  let newCountryArr = countriesData.filter(
    (co) => co.region == event.target.value
  );
  sec2.innerHTML = "";
  newCountryArr.map((item) => {
    sec2.innerHTML += `<div> <p> ${item.name.common}</p></div>`;
  });
});

function sort() {
  let sortEl = document.getElementById("sort");

  // countriesData.sort((a) => a.region);
  let sortedData = [];

  sec2.innerHTML = "";
  if (sortEl.innerHTML == "Дээшээ") {
    // console.log(countriesData.sort((a, b) => b.population - a.population));
    sortEl.innerHTML = "Доошоо";
    // sortedData = [...countriesData.sort((a) => a.name.common)];
    sec2.innerHTML = "";

    countriesData
      .sort((a, b) => b.area - a.area)
      .map((item) => {
        sec2.innerHTML += `<div> <p> ${item.name.common} - ${item.area}</p></div>`;
      });
  } else {
    sec2.innerHTML = "";
    sortEl.innerHTML = "Дээшээ";
    countriesData
      .sort((a, b) => a.area - b.area)
      .map((item) => {
        sec2.innerHTML += `<div> <p> ${item.name.common} - ${item.area}</p></div>`;
      });
  }
}
