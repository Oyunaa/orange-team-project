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


function data() {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            productData = { ...data }
            console.log(data.products);
            rowCategory()
            fillProducts()
        })
        .catch((err) => console.log(err));
}
data()


function rowCategory() {
    productData.products.map((c) => {
        if (!allCategories.includes(c.category)) {
            allCategories.push(c.category);
            rowCategories.innerHTML += `
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" aria-current="true">${c.category}</button>
            </div>`
            // colCategories.innerHTML += `
            // <div class="list-group">
            //     <button type="button" class="list-group-item list-group-item-action" aria-current="true">${c.category}</button>
            // </div>`
        }
    })
}




function fillProducts() {
    for (let i = 0; i < productData.products.length; i++) {
        products.innerHTML += `
        <div id="card" class="card" style="width: 18rem;">
            <div class="ratio ratio-4x3">
                <img src="${productData.products[i].thumbnail}" id="image">
            </div>
            <div class="card-body p-3">
                <h5 id="title" class="card-title">${productData.products[i].title}</h5>
                <div>
                    <p id="price">${"$" + productData.products[i].price}</p>
                    <p id="discount">${"$" + productData.products[i].discount}</p>
                </div>
                <p id="description" class="card-text">${productData.products[i].description.substr(0, 60)}...</p >
                <div class="card-body d-flex justify-content-between p-0">
                    <p id="rating">${productData.products[i].rating}</p>
                    <button type="button" class="btn btn-outline-primary"><i class="bi bi-cart" style="font-size: 1.5rem; color: cornflowerblue;"></i></button>
                </div>
            </div >
        </div >`
    }
}

