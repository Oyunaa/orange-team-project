let productData = [];
let categoryData = [];
let list = document.getElementById("list")
let aside = document.getElementById("aside")
let right = document.getElementById("right")
function fillProduct(){
    let row = "";
fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) =>{
    productData = [...data.products]
    console.log(productData)
    productData.map(c=> {
        if(!categoryData.includes(c.category)){
            categoryData.push(c.category)
        }
    })
    drawHTML()
    console.log(categoryData);
    categoryData.map((categoryName)=>{
        row+=`<li>
        <button onclick="sortCategory('${categoryName}')" class="border border-white bg-white text-secondary " >${categoryName}</button>
        </li>`
      
    })
    // console.log(row);
    list.innerHTML = row
    aside.innerHTML = row
})
}
fillProduct()
function drawHTML(){
    let row = "";
    productData.map(({title, price, rating, discountPercentage, description, thumbnail},  index) => {
        row += `<div class="col-3">
    <div class="card-body">
        <div class="cardImg ratio ratio-4x3">
            <img src="${thumbnail}"> 
        </div>
        <div class="card-body ">
                <h5 class="card-title text-truncate">${title}</h5>
                <p class="text-truncate">${description}</p>
            <div class="price d-flex justify-content-between">
                <p class="card-price">${price}$</p>   
               <div class="bg-white text-success"> <span>${discountPercentage}% OFF</span></div>
            </div>         
            <div class="d-flex justify-content-between align-items-center">
                <p>Rating: ${rating}</p>  
                <button type="button" class="border border-primary rounded text-primary bg-white"><a href="./cart.html" class="text-decoration-none">Watch</a></button>
            </div>          
        </div>
    </div>
</div>`
    })
    right.innerHTML = row
}
let highEl = document.getElementById("high")
let lowEl = document.getElementById("low")
function sortedData(parameter){
    if(parameter == "high"){
        productData.sort((a , b)=>a.price - b.price)
    }else if(parameter == "low"){
        productData.sort((a,b)=> b.price - a.price)
    }
drawHTML()
}
function sortCategory(cat){
 let arr = [];
    console.log(cat);
    for(let y= 0; productData.lenght; y++){
        if(cat == productData[y].category){
         arr.push(productData[y])
        }
    }
    drawHTML(arr)
 }



