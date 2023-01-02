let table = document.getElementById("productList");
let productData = [];

getData()
function getData() {
    let row = "";
    fetch("http://192.168.1.198:4040/product")
        .then(response => response.json())
        .then((data) => {
            console.log(data);

            data.product.map(({ _id, title, description, price, isSpecial }, index) => {


                row = `<tr>
                            <td>${index + 1}</td>
                            <td>${title}</td>
                            <td>${description}</td>
                            <td>${price}</td>
                            <td>
                            ${isSpecial ? "Тийм" : "Үгүй"}
                            </td>
                            <td class="d-flex justify-content-between">
                            <a href="./productNew.html?id=${_id}"><i class="fa-regular fa-pen-to-square"></i></a>
                            <a onclick="deleteProduct('${_id}')"><i class="fa-solid fa-delete-left"></i></a>
                            </td>
                        </tr>`;

                table.innerHTML += row;
            }
            );
        })
        .catch((err) => console.log(err));
}
