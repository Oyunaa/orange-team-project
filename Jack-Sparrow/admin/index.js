let table = document.getElementById('productList')

getData()
function getData(){
    let row=""
    fetch ("http://192.168.1.198:4040/product")
    .then(res => res.json())
    .then((data) => {
        data.product.map(({_id, category, title, description, price, isSpecial}, index) =>{
    row = `<tr>
            <td>${index+1}</td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${description}</td>
            <td>${isSpecial ? "Yes" : "No"}</td>
            <td>
                <a href="./productNew.html?id=${_id}" class = "btn btn-primary">Edit</a>
                <a onclick="deleteProduct('${_id}')" class = "btn btn-danger">Delete</a>
            </td>
        </tr>`
    table.innerHTML += row
})
})}