let table = document.getElementById("productlist");
let tableBody = document.getElementById("tableBody");
let productData

getData()
function getData() {
    fetch("http://192.168.1.198:4040/product")
        .then((res) => res.json())
        .then((data) => {
            data.product.map(({ _id, category, title, description, price, isSpecial }, index) => {
                row = `<tr>
                <td>${index + 1}</td>
                <td>${title}</td>
                <td>${price}</td>
                <td>${description}</td>
                <td>${isSpecial}</td>
                <td>
                    <a href="./productNew.html?id=${_id}" class="btn btn-secondary">Edit</a>
                    <a onclick="deleteProduct('${_id}')" class="btn btn-danger text-light">Edit</a>
                </td>
            </tr>`

                tableBody.innerHTML += row;
            })
        })
}
