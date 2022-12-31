let productData = [];
let productCategoriesData = [];
let products = document.getElementById("products");
let categories = document.getElementById("categories");
let pagination = document.getElementById("pagination");

filldata();
fillCategories();

function filldata() {
    fetch('https://dummyjson.com/products?limit=10&skip10')
        .then((res) => res.json())
        .then((data) => {
            productData = { ...data };
            writeInnerHTML(productData.products);
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

function writeInnerHTML(a) {
    for (let i = 0; i < a.length; i++) {
        products.innerHTML += `
        <div  class="productCard">
        <a href="productDetail.html?productID=${a[i].id}">
        <img src="${a[i].thumbnail}" alt="pic" width="300px">
            <h3 class="productTitle">${a[i].title}</h3>
        </a>    
            <div class="productPriceRow">
                <div class="productPrice">Price: $${a[i].price}</div>
                <div class="productDiscount">Discount: ${a[i].discountPercentage}%</div>
            </div>
            <div class="productDiscription">${a[i].description.substr(0, 60)}...</div>
            <div class="productRatingRow">
                <div>Rating: ${a[i].rating}/5.0</div>    
                <button class="addCart" onclick="addToCart(${a[i].id})">Add Cart</button>
            </div>
        </div>`
    }
}

function writeCategoties() {
    for (let i = 0; i < productCategoriesData.length; i++) {
        categories.innerHTML += `<span onclick="sortByCategories('${productCategoriesData[i]}')" id="${productCategoriesData[i]}" style = "background-color: white; color: black">${productCategoriesData[i]}</span><br>`
    }
}

function sortByCategories(para) {
    products.innerHTML = "";
    for (let i = 0; i < productData.products.length; i++) {
        if (productData.products[i].category == para) {
            products.innerHTML += `
            <div  class="productCard">
        <a href="productDetail.html?productID=${productData.products[i].id}">
        <img src="${productData.products[i].thumbnail}" alt="pic" width="300px">
            <h3 class="productTitle">${productData.products[i].title}</h3>
        </a>    
            <div class="productPriceRow">
                <div class="productPrice">Price: $${productData.products[i].price}</div>
                <div class="productDiscount">Discount: ${productData.products[i].discountPercentage}%</div>
            </div>
            <div class="productDiscription">${productData.products[i].description.substr(0, 60)}...</div>
            <div class="productRatingRow">
                <div>Rating: ${productData.products[i].rating}/5.0</div>    
                <button class="addCart" onclick="addToCart(${productData.products[i].id})">Add Cart</button>
            </div>
        </div>`
        }
    }


    categories.innerHTML = "";
    writeCategoties();
    let categoryEl = document.getElementById(para);
    categoryEl.style.backgroundColor = "#667c9b";
    categoryEl.style.color = "white";
    categoryEl.style.borderRadius = "20px";
    categoryEl.style.padding = "0px 10px 0px 10px"
}

let input = document.getElementsByTagName("input")[0];
let newProductData = "";

input.addEventListener("input", (a) => {
    products.innerHTML = "";
    newProductData = productData.products.filter((ab) => {
        return ab.title.includes(a.target.value) == true;
    })
    writeInnerHTML(newProductData);
})

function sortToHigh() {
    products.innerHTML = "";
    productData.products.sort((a, b) => a.price - b.price);
    writeInnerHTML(productData.products);
}

function sortToLow() {
    products.innerHTML = "";
    productData.products.sort((a, b) => b.price - a.price);
    writeInnerHTML(productData.products);
}

let addedToCart = [];
let bigCart = document.getElementById("bigCart");
let cartProductCount = document.getElementById("cartProductCount");
cartProductCount.innerHTML = `${addedToCart.length}`;

function addToCart(para) {
    productData.products.map(c => {
        if (c.id == para) {
            addedToCart.push(c);
        }
        return addedToCart;
    })
    writeCartInnerHTML();
    cartProductCount.innerHTML = `${addedToCart.length}`;
}

function writeCartInnerHTML() {
    let cartRow = `<div id="cartHeaderRow"><div id="cartHeaderRowProduct">Product</div><div id="cartHeaderRowPrice">Price</div></div>`;
    let totalPrice = 0;
    addedToCart.map((c, b) => {
        cartRow += `<div class="cartRow">
        <img class="cartItemImg"src=${c.thumbnail}>
        <div class="cartItemTitle">${c.title}</div>
        <span class="removeFromCart" onclick="removeItemFromCart(${b})">Remove</span>
        <div class="cartItemPrice">$${c.price}</div>
        </div>`
        totalPrice += c.price;
    })
    bigCart.innerHTML = cartRow + `<div id="totalPrice">Total Price:$${totalPrice}</div>`;
}

function removeItemFromCart(para) {
    addedToCart.splice(para, 1);
    writeCartInnerHTML();
    cartProductCount.innerHTML = `${addedToCart.length}`;
}

let cart = document.getElementById("cart");

function openCart() {
    if (addedToCart.length > 0) {
        bigCart.style = "display:block"
        cart.setAttribute("onclick", "closeCart()");
    }

}

function closeCart() {
    bigCart.style = "display:none"
    cart.setAttribute("onclick", "openCart()");;
}

for (let i = 0; i < productData.total / 10; i++) {
    pagination.innerHTML += `<a href="./index.html?pageNumber=${i}>${i + 1}</a>`;
}
