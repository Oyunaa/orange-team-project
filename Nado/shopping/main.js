let productData = [];
let productCategoriesData = [];
let products = document.getElementById("products");
let categories = document.getElementById("categories");
let pagination = document.getElementById("pagination");
let totalProductCount = 0;


filldata();
fillCategories();
fillDatafForCat();

async function filldata() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("pageNumber") == null) {
        pageNumber = 0;
    } else {
        pageNumber = params.get("pageNumber");
    }

    await fetch(`https://dummyjson.com/products?limit=15&skip=${pageNumber * 15}`)
        .then((res) => res.json())
        .then((data) => {
            productData = { ...data };
            writeInnerHTML(productData.products);
        });
    totalProductCount = productData.total;

    for (let j = 0; j < (totalProductCount / 15); j++) {
        pagination.innerHTML += `<a href="./index.html?pageNumber=${j}" class="paginationNumbers" id="${j}">${j + 1}</a>`
    }

    currentPageNumber = document.getElementById(pageNumber);
    currentPageNumber.style.backgroundColor = "rgb(105, 105, 142)";
    currentPageNumber.style.color = "whitesmoke";

}

async function fillDatafForCat() {
    await fetch(`https://dummyjson.com/products?limit=100`)
        .then((res) => res.json())
        .then((data) => {
            productDataForCat = { ...data };
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
    for (let i = 0; i < productDataForCat.products.length; i++) {
        if (productDataForCat.products[i].category == para) {
            products.innerHTML += `
            <div  class="productCard">
        <a href="productDetail.html?productID=${productDataForCat.products[i].id}">
        <img src="${productDataForCat.products[i].thumbnail}" alt="pic" width="300px">
            <h3 class="productTitle">${productDataForCat.products[i].title}</h3>
        </a>    
            <div class="productPriceRow">
                <div class="productPrice">Price: $${productDataForCat.products[i].price}</div>
                <div class="productDiscount">Discount: ${productDataForCat.products[i].discountPercentage}%</div>
            </div>
            <div class="productDiscription">${productDataForCat.products[i].description.substr(0, 60)}...</div>
            <div class="productRatingRow">
                <div>Rating: ${productDataForCat.products[i].rating}/5.0</div>    
                <button class="addCart" onclick="addToCart(${productDataForCat.products[i].id})">Add Cart</button>
            </div>
        </div>`
        }
    }


    categories.innerHTML = `<div id="categories"><h3>Categories</h3></div>`;
    writeCategoties();
    let categoryEl = document.getElementById(para);
    categoryEl.style.backgroundColor = "#667c9b";
    categoryEl.style.color = "white";
    categoryEl.style.borderRadius = "20px";
    categoryEl.style.padding = "0px 10px 0px 10px"

    pagination.innerHTML = "";
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

