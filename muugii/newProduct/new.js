let btnEl = document.getElementById("btn");
let titleEl = document.getElementById("title");
let categoryEl = document.getElementById("category");
let priceEl = document.getElementById("price");
let imgEl = document.getElementById("image");

let radio = document.getElementsByName("isspecial");
let checkEl = document.getElementsByName("days");

btnEl.addEventListener("click", OnSave);

function OnSave(e) {
    e.preventDefault()
    let ispe = false;
    let daysStr = "";
    for (let i = 0; i < radio.length; i++) {
        // console.log(radio[i]);
        if (radio[i].checked) {
            ispe = radio[i].value == "yes" ? true : false;
        }

    }
    for (let j = 0; j < checkEl.length; j++) {

        if (checkEl[j].checked) {
            daysStr += checkEl[j].value + ",";
        }

    }

    console.log(dayStr);

    fetch("http://192.168.1.198:4040/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: titleEl.value,
            category: categoryEl.value,
            price: priceEl.value,
            image: "test",
            isSpecial: ispe,
            days: daysStr,
        }),
    })
        .then(res => res.json())
        .then((data) => {
            window.location.href = "./index.html";
            console.log(data);
        })

}

function initFunc() {
    let location = window.location.search;

    let urlParams = new URLSearchParams(location);
    let id = urlParams.get("id");

    if (id.length > 0) {
        fetch(`http://192.168.1.198:4040/product/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                titleEl = data.product.title;
                categoryEl = data.product.category;
                priceEl = data.product.price;

                let str = data.product.isSpecial ? "yes" : "no";
                for (let i = 0; i < radio.length; i++) {
                    if (radio[i].value == data)
                        radio[i].value = true;

                }
                let arr = data.product.days.split(".");
                for (let i = 0; i < checkEl.length; i++) {
                    for (let x = 0; x < arr.length; x++) {
                        if (checkEl[i].value == arr[x) {

                        }

                    }
                }
            })
            .catch((err) => console.log(err))
    }
}


function delete (id){
    let val = window.confirm("Устгахдаа итгэлтэй байна уу?")

    fetch("http://192.168.1.198:4040/product", {
        method: "DEL",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: titleEl.value,
            category: categoryEl.value,
            price: priceEl.value,
            image: "test",
            isSpecial: ispe,
            days: daysStr,
        }),
    })
}