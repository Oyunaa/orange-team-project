let table = document.getElementById("productList")

getData()
function getData(){

    let row = "";
    fetch("http://192.168.1.198:4040/product")
    .then(response => response.json())
    .then((data)=>{
        console.log(data);
        data.product.map(({title, _id , description,  price, isSpecial}, index)=>{
            row = `<tr>
            <th>${index+1}</th>
            <td>${title}</td>
            <td>${price}</td>
            <td>${description}</td>
            <td>${isSpecial ? "Тийм" : "Үгүй"}</td>
            <td>
            <a href="./product.html?id=${_id}" class="btn btn-secondary text-light">Засах</a>
            <a onclick="deleteProduct(${_id})" class="btn btn-danger" text-light>Устгах</a>
            </td>
            </tr>`;
            table.innerHTML += row
    
        })

 

    })
    .catch((err)=>console.log(err))
}
