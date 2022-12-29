let btnEl = document.getElementById("btn")
let titleEl = document.getElementById("title")
let catEl = document.getElementById("category")
let priceEl = document.getElementById("price")
let fileEl = document.getElementById("image")


let radio = document.getElementsByName("isSpecial")
let checkMul = document.getElementByName("days")

btnEl.addEventListener("click", onsave)
function onsave(event) {
    event.preventDefault()
    let ispe = false;
    let daysStr = "";
    for (let i = 0; i < radio.length; i++) {
        console.log(radio[i])
        if (radio[i].checked) {
            ispe = radio[i].value == "yes" ? true : false;
        }
    }

    for (let i = 0; i < checkMul.length; i++) {
        if (radicheckMulo[i].checked) {
            console.log(checkMul[i].value);
            daysStr += checkMul[i].value + ",";
        }
    }

    fetch("http://192.168.1.198:4040/product", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            title: title.value,
            category: catEl.value,
            price: priceEl.value,
            image: "test",
            isSpecial: true,
            days: daysStr.substring(0, daysStr.length - 1)
        }),
    }).then((data) => {
        window.location.href = "./index.html"
        console.log(data)
    })
}

function initFunc() {
    let location = window.location.search

    let urlParams = new URLSearchParams(location)
    let id = urlParams.get("id")
    fetch(`http://192.168.1.198:4040/product${_id}`)
        .then((res) => res.json())
        .then((data) => {
            titleEl.value = data.product.title
            catEl.value = data.product.category
            priceEl.value = data.product.price

            let str = data.product.isSpecial ? "yes" : "no"

            for (let i = 0; i < radio.length; i++) {
                if (radio[i].value == str) {
                    radio[i].checked = true;
                }
            }

            let arr = data.product.days.split(",");
            for (let i = 0; i < checkMul.length; i++) {
                for (let x = 0; x < arr.length; x++) {
                    checkMul.checked
                }
            }
        })
        .catch((err) => console.log(err);)

}