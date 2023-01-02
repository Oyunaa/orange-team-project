let btnEl = document.getElementById("btn");
let titleEl = document.getElementById("title");
let categoryEl = document.getElementById("category");
let priceEl = document.getElementById("price");
let imgEl = document.getElementById("img");
let isspecialEl = document.getElementsByName("isspecial");
let daysEl = document.getElementsByName("days");

function onSave(e) {
    e.preventDefault()

    let ispe = false;
    let daysStr = "";


    for (let i = 0; i < isspecialEl.length; i++) {
        if (radio[i].checked) {
            ispe = radio[i].value == "true" ? true : false
        }
    }

    for (let i = 0; i < daysEl.length; i++) {
        if (daysEl[i].checked) {
            daysStr += daysEl[i].value + ",";
        }
    }

    fetch("http://192.168.1.198:4040/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: titleEl.value,
            category: categoryEl.value,
            price: priceEl.value,
            image: "test",
            isspecial: ispe,
            days: daysStr.splice(0, daysStr.length - 1),
        })
            .then
    })
}