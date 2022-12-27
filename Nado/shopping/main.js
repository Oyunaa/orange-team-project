let productData = [];
let productCategoriesData = [];
let products = document.getElementById("products");
let categories = document.getElementById("categories");

filldata();
fillCategories();

function filldata() {
    fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
            productData = { ...data };
            writeInnerHTML();
        });
}
function fillCategories() {
    fetch('https://dummyjson.com/products/categories')
        .then((res) => res.json())
        .then((data) => {
            productCategoriesData = [...data];
            writeCategoties();
        });
}

function writeInnerHTML() {
    for (let i = 0; i < productData.products.length; i++) {
        products.innerHTML += `
        <div class="productCard">
            <img src="${productData.products[i].thumbnail}" alt="pic" width="300px">
            <h3 class="productTitle">${productData.products[i].title}</h3>
            <div class="productPriceRow">
                <div class="productPrice">$${productData.products[i].price}</div>
                <div class="productDiscount">${productData.products[i].discountPercentage}%</div>
            </div>
            <div class="productDiscription">${productData.products[i].description.substr(0, 60)}...</div>
            <div class="productRatingRow">
                <div>${productData.products[i].rating}/5.0</div>    
                <button class="addCart">Add Cart</button>
            </div>
        </div>`
    }
}

function writeCategoties() {
    for (let i = 0; i < productCategoriesData.length; i++) {
        categories.innerHTML += `<div onclick="sortByCategories(${productCategoriesData[i]} ">${productCategoriesData[i]}</div>`
    }
}

function sortByCategories(para) {

}


