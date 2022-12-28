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
        categories.innerHTML += `<span onclick="sortByCategories('${productCategoriesData[i]}')">${productCategoriesData[i]}</span><br>`
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
let bigCart = document.getElementById("bigCart")

function addToCart(para) {
    productData.products.map(c => {
        if (c.id == para) {
            addedToCart.push(c);
        }
        return addedToCart;
    })
    writeCartInnerHTML();
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
}

let cart = document.getElementById("cart");

function openCart() {
    bigCart.style = "display:block"
    cart.setAttribute("onclick", "closeCart()");
}

function closeCart() {
    bigCart.style = "display:none"
    cart.setAttribute("onclick", "openCart()");;
}