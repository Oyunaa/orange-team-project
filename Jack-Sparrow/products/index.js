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
        row += `<div class="card productCart" style="width: 18rem;">
        <img src="${item.thumbnail}" class="card-img-top img" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}title</h5>
          <p class="card-text">${item.description}desc</p>
          <p class="card-text">${item.price}price</p>
          <p class="card-text">${item.discountPercentage}discount</p>
          <p class="card-text">${item.stock}stock</p>
          <p class="card-text">${item.rating}rating</p>
          <a href="#" class="btn btn-primary">Book</a>
        </div>
      </div>`
    )
    proSec.innerHTML = row
}