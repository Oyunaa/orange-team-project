let table = document.getElementById("productList")

function getData() {
    let row = "";
    fetch("http://192.168.1.198:4040/product")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            data.product.map(({ _id, title, description, price, category, isSpecial }, index) => {
                row += `<tr>
                <td>${index + 1}</td>
                <td>${title}</td>
                <td>${price}</td>
                <td>${category}</td>
                <td> ${isSpecial ? "Тийм" : "Үгүй"}</td>
                <td>
                <a href="./productNemeh.html?id=${_id}" class="btn btn-outline-secondary">Засах</a>
                <a onclick="deleteProduct('${_id}')" href="" class="btn btn-outline-danger">Устгах</a>
                </td>
            </tr>`;
                table.innerHTML = row
            }
            )
        })
        .catch((err) => console.log(err))
}

getData()