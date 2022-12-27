let card = document.getElementById("card")
let img = document.getElementById("image")
let title = document.getElementById("title")
let description = document.getElementById("description")
let rating = document.getElementById("rating")
let price = document.getElementById("price")
let productData = [];
let allCategories = [];
let products = document.getElementById("products")


function data() {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            productData = { ...data }
            console.log(data.products);
            fillProducts()
        })
        .catch((err) => console.log(err));
}
data()


function printCategory() {
    productData.map(c =>)
    if (!allCategories) {

    }
}


function fillProducts() {
    for (let i = 0; i < productData.products.length; i++) {
        products.innerHTML += `
        <div id="card" class="card" style="width: 18rem;">
        <div class="ratio ratio-4x3">
        <img src="${productData.products[i].thumbnail}" id="image">
        </div>
            <div class="card-body">
            <h5 id="title" class="card-title">${productData.products[i].title}</h5>
            <div>
            <p id="price">${"$" + productData.products[i].price}</p>
            <p id="discount">${"$" + productData.products[i].discount}</p>
            </div>
            <p id="description" class="card-text text-truncate">${productData.products[i].description.substr(0, 50)}</p>
            <div id="" class="d-flex justify-content-between card-body">
                <p id="rating">${productData.products[i].rating}</p>
                <i class="bi bi-cart"></i>
            </div>
            </div>
        </div > `
    }
}

