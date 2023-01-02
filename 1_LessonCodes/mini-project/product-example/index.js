let cardEl = document.getElementById("products");
let inputSearch = document.getElementById("inputSearch");
let cardCount = document.getElementById("cardCount");
let menuEl = document.getElementById("menu");

let productJson = [];
let cart = [];
inputSearch.addEventListener("input", (e) => searchValue(e));

function searchValue(e) {
  let filterData = productJson.filter((c) => c.title.includes(e.target.value));
  drawHTML(filterData);
}

getDataFrom();
fillCategories();

function getDataFrom() {
  const a = window.location;
  const params = new URLSearchParams(a.search);
  let pageId = params.get("pageId");

  pageId = pageId ? pageId * 10 - 10 : 0;

  fetch(`https://dummyjson.com/products?limit=10&skip=${pageId}`)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      productJson = [...result.products];
      drawHTML();
      showPagination(result.total);
    })
    .catch((err) => console.log(err));
}

function drawHTML(filterData) {
  cardEl.innerHTML = "";
  (filterData ? (filterData.length == 0 ? [] : filterData) : productJson).map(
    (x) => {
      let row = `
  <div class="col-md-3 col-lg-3 col-sm-3">
      <div class=" w-100 card align-items-center justify-content-between" style="height: 430px;">
          <img class="card-img-top" src="${x.thumbnail}"/>
          <div class="card-body">
            <h5 class="card-title"><a href="./product-details.html?id=${
              x.id
            }"> ${x.title}</a></h5>
            <p class="card-text">${x.description.substr(0, 50)}</p>
            <div class="d-flex justify-content-between align-items-center ">
              <div class="price">$${x.price}</div>
              <span class="bg-opacity-10 badge text-dark text-bg-success">${
                x.discountPercentage
              }%</span>
            </div>
           
          </div>
          <div class="w-100 d-flex justify-content-between align-items-center">
            <i class="m-2 bi bi-bag-heart text-alert"></i>
            <div class="btn btn-primary align-self-end m-2" onClick="addCart('${
              x.id
            }','${x.title}','${x.price}')">Add Cart</div>
          </div>

          
      </div>
      
    </div>`;
      cardEl.innerHTML += row;
    }
  );
  // <i class="bi bi-bag-heart-fill"></i>
  filterData && filterData.length > 0 && showPagination(filterData.length);
}

function fillCategories() {
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      data.map((m) => {
        menuEl.innerHTML += `<li class="list-group-item" onclick="filterCategories('${m}')">${m}</li>`;
      });
    });
}

function showPagination(total) {
  const a = window.location;
  const params = new URLSearchParams(a.search);
  let pageId = params.get("pageId");

  let menuPagination = document.getElementById("menuPagination");
  menuPagination.innerHTML = "";

  // 100
  for (let i = 0; i < total / 10; i++) {
    menuPagination.innerHTML += ` <li class="page-item ${
      pageId == i + 1 ? "active" : ""
    }"><a class="page-link" href="./index.html?pageId=${i + 1}">${
      i + 1
    }</a></li>`;
  }
}

function addCart(id, title, price) {
  let cartTable = document.getElementById("cart-table");
  let row = "";

  cart.push({ id, title, price });

  cardCount.innerHTML = cart.length;

  cart.map((e) => {
    row += `<tr>
    <td>${e.title}</td>
    <td><span> 1</span></td>
    <td>${e.price}</td>
    </tr>`;
  });

  cartTable.innerHTML = row;
}

function filterCategories(paramCategory) {
  for (let i = 0; i < menuEl.children.length; i++) {
    const element = menuEl.children[i];
    if (element.innerHTML == paramCategory) {
      element.classList.add("active");
    } else {
      if (element.classList.contains("active")) {
        element.classList.remove("active");
      }
    }
  }
  // https://dummyjson.com/products?limit=10&skip=${pageId}
  if (paramCategory) {
    fetch(`https://dummyjson.com/products/category/${paramCategory}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        productJson = [...result.products];

        drawHTML();

        showPagination(result.total);
      })
      .catch((err) => console.log(err));
  } else {
    drawHTML();
  }
}

function sort(field, sortDirection) {
  if (sortDirection == "low") {
    productJson.sort((a, b) => b[field] - a[field]);
  } else {
    productJson.sort((a, b) => a[field] - b[field]);
  }
  drawHTML();
}
