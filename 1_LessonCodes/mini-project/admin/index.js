let table = document.getElementById("productList");

getData();

function getData() {
  let row = "";
  fetch("http://localhost:4040/product")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.product.map(
        ({ _id, category, title, description, price, isSpecial }, index) => {
          row = `<tr> 
                   <td>${index + 1}</td>
                   <td>${title}</td>
                   <td>${price}</td>
                   <td>${category}</td>
                   <td>
                     ${isSpecial ? "Тийм" : "Үгүй"}
                   </td>
                   <td>
                    <a href="./productNew.html?id=${_id}" class="btn btn-secondary text-light">Засах</a>
                    <a onclick="deleteProduct('${_id}')" class="btn bg-danger text-light">Устгах</a>
                   </td>
               </tr>`;

          table.innerHTML += row;
        }
      );
    })
    .catch((err) => console.log(err));
}

// headers: { "Content-Type": "application/json" },
function deleteProduct(id) {
  let val = window.confirm("Устгахдаа итгэлтэй байна уу");

  if (val) {
    fetch(`http://localhost:4040/product/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "./index.html";

        // console.log(data);
      });
  }
}
