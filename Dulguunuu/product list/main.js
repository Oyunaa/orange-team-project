let card = document.getElementById("card")
let img = document.getElementById("image")
let title = document.getElementById("title")
let description = document.getElementById("description")
let rating = document.getElementById("rating")
let price = document.getElementById("price")
let productData = [];
let allCategories = [];
let rowCategories = document.getElementById("rowCat")
let colCategories = document.getElementById("colCat")
let products = document.getElementById("products")
let searchInput = document.getElementById("searchInput")


function data() {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            productData = [...data.products]
            console.log(productData);
            rowCategory()
            drawHTML()
        })
        .catch((err) => console.log(err));
}
data()


function rowCategory() {
    productData.map((c) => {
        if (!allCategories.includes(c.category)) {
            allCategories.push(c.category);
            rowCategories.innerHTML += `
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" aria-current="true">${c.category}</button>
            </div>`
        }
    })
}

function drawHTML(parameter) {
    (parameter ? parameter : productData).map(({ id, title, description, price, thumbnail, rating, discountPercentage }, index) => {
        products.innerHTML += `
        <div id="card" class="card" style="width: 18rem;">
            <div class="ratio ratio-4x3">
                <img src="${thumbnail}" id="image">
            </div>
            <div class="card-body p-3">
                <h5 id="title" class="card-title">${title}</h5>
                <div class="d-flex justify-content-between align-items-baseline">
                    <p id="price" class="fw-bold">${"$" + price}</p>
                    <p id="discount" class="text-success-emphasis bg-success-subtle border border-success-subtle rounded-3 p-1">${discountPercentage}%</p>
                </div>
                <p id="description" class="card-text fw-lighter">${description.substr(0, 60)}...</p >
                <div class="card-body d-flex justify-content-between p-0 align-items-baseline">
                    <p id="rating">Rating: ${rating}/5.0</p>
                    <button type="button" id="cart" class="btn btn-outline-primary"><i class="bi bi-cart" style="font-size: 1.5rem; color: cornflowerblue;"></i></button>
                </div>
            </div >
        </div >`
    })
}

searchInput.addEventListener("input", (e) => {
    let filteredData = productData.filter(c => { return c.title.includes(e.target.value) })
    drawHTML(filteredData)
})

// let cart = document.getElementById("cart")
// let cartBadge = document.getElementById("cartBadge")

// cart.addEventListener("click", () => {
//     cart.style.backgroundColor = "white"
//     // `<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>`
// }) 

