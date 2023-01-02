
const params = new URLSearchParams(window.location.search);


let productID = params.get("productID");

filldata()

async function filldata() {
    await fetch(`https://dummyjson.com/products/${productID}`)
        .then((res) => res.json())
        .then((data) => {
            productData = { ...data };
        });
    writeInnerHTML();
    productImages.innerHTML +=
        `<div class="carousel-item active">
            <img src=${productData.images[0]} class="d-block w-100" alt="pic">
        </div>`
    writeImages();
}

let productDetail = document.getElementById("information");
let productImages = document.getElementById("images");

function writeInnerHTML() {
    productDetail.innerHTML = `
    <div>Title: ${productData.title}</div>
    <div>Brand: ${productData.brand}</div>
    <div>Category: ${productData.category}</div>
    <div>Description: ${productData.description}</div>
    <div>Price: $${productData.price}</div>
    <div>Rating: ${productData.rating}/5.0</div>
    <div>Stock: ${productData.stock}</div>`
}



function writeImages() {
    for (let i = 1; i < productData.images.length; i++) {
        productImages.innerHTML +=
            `<div class="carousel-item">
            <img src=${productData.images[i]} class="d-block w-100" alt="pic">
        </div>`
    }
}
