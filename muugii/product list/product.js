let product = document.getElementById("list-section");
let productData = [];


fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        productData = [...data.products];
        show();
    })
    .catch((err) => console.log(err));


function show() {
    let row = '';
    for (let i = 0; i < productData.length; i++) {
        row += `<div class="col">
                   <img src="${productData[i].thumbnail}"></img>
                   <h5>${productData[i].title}</h5>
                   <span class="green">${productData[i].discountPercentage}</span>
                   <b>${productData[i].price}</b>
                   <p>${productData[i].description}</p>
                   <div class="row">
                   <p>${productData[i].rating}</p>
                   <button onclick="">&#9758 Watch </button>
                   </div>
                   </div>`;

    }

    // productData.map(({ thumbnail, title, rating, price, description, discountPercentage }) => {
    //     product.innerHTML += `<div class="col">
    //     <img src="${thumbnail}"></img>
    //     <h5>${title}</h5>
    //     <span style="border: 1px solid green, color: green">${discountPercentage}</span>
    //     <b>${price}</b>
    //     <p>${description}</p>
    //     <div class="row">
    //     // <p>${rating}</p>
    //     <button onclick="">"&#9758;" Watch </button>
    //     </div>
    //     </div>`
    // })


    product.innerHTML = row;
};




