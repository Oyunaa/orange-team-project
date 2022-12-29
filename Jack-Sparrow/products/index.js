let pro = []
let productsCategory = []
let catHead = document.getElementById("categoryHeader")
let catBody = document.getElementById("categoryBody")
let proSec = document.getElementById("productSection")
function fillProducts(){
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        pro = {...data }
        pro.products.map((item) => {
            if (!productsCategory.includes(item.category)){
                productsCategory.push(item.category)
            }
        })
        console.log(productsCategory);
        drawCat(productsCategory)
        drawPro()
    })
}
fillProducts()
function drawCat(productsCategory) {
    let row = "";
    productsCategory.map(item => 
        row += `<li class="nav-items"><button class="btn btn-light">${item}</button></li>`
    )
    catHead.innerHTML = row
    catBody.innerHTML = row   
}
function drawPro() {
    let row = "";
    pro.products.map(item => 
        row += `<div class="card productCart">
        <img src="${item.thumbnail}" class="card-img-top img" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}title</h5>
          <p class="card-text desc">${item.description}</p>
          <p class="card-text discount">${item.discountPercentage}% OFF</p>
          <p class="card-text price">$${item.price}</p>
          <p class="card-text stock">${item.stock}</p>
          <p class="card-text rating">Rating : ${item.rating}</p>
          <a href="#" class="btn book btn-primary">Book</a>
        </div>
      </div>`
    )
    proSec.innerHTML = row
}