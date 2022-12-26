//products

//category - Хувцас -1, Гэр ахуйн бараа -2, Хэрэглээ - 3
let products = [
  { productId: 1, productName: "Цүнх", shop_id: 1, category: 3 },
  { productId: 2, productName: "Гутал", shop_id: 2, category: 1 },
  { productId: 3, productName: "Хар цамц", shop_id: 1, category: 1 },
  { productId: 4, productName: "Будаа агшаагч", shop_id: 1, category: 2 },
  { productId: 5, productName: "Хутга", shop_id: 2, category: 2 },
  { productId: 6, productName: "Аяга", shop_id: 1, category: 3 },
];

let shops = [
  { id: 1, name: "Номин" },
  { id: 2, name: "Улаанбаатар" },
  { id: 3, name: "Сансар" },
];

// Эхлээд тухайн нэг барааны мэдээлэл харуулах
// Сонгосон барааны дэлгүүрийн мэдээллийг харуулах
// Тухайн дэлгүүрээс нэг ангилалд байгаа бусад барааг харуулах
function findByProductId(id) {
  let promise = new Promise((resolve, reject) => {
    // console.log("index", products.indexOf({ productId: id }));

    let product;

    for (let i = 0; i < products.length; i++) {
      if (products[i].productId == id) {
        product = products[i];
      }
    }
    // console.log(product);

    if (product.productId != -1) {
      resolve({ product });
    } else {
      reject("not found");
    }
  });
  return promise;
}

function findShopDetails(productObj, shops) {
  // console.log("find", productObj);
  let promise = new Promise((resolve, reject) => {
    let shop;

    for (let i = 0; i < shops.length; i++) {
      if (shops[i].id == productObj.shop_id) {
        shop = shops[i];
      }
    }

    if (shop.id != -1) {
      resolve(shop);
    } else {
      reject("not found shop");
    }
  });
  return promise;
}

function findSimilarProducts(productObj) {
  let prom = new Promise((res, rej) => {
    let similarPro = [];
    for (let i = 0; i < products.length; i++) {
      if (
        products[i].shop_id == productObj.shop_id &&
        products[i].category == productObj.category &&
        products[i].productId != productObj.productId
      ) {
        similarPro.push(products[i]);
      }
    }

    if (similarPro.length > 0) {
      res(similarPro);
    } else {
      rej("ijil tustei baraa algaa");
    }
  });
  return prom;
}

async function showDetails(id) {
  try {
    let product = await findByProductId(id);

    console.log(product);
    let shop = await findShopDetails(product);
    // console.log(product);
    console.log(shop);
    let sh = 1;
    let similar = await findSimilarProducts(product);
    console.log(similar);

    let div = document.createElement("div");
    let str = "";
    for (let i = 0; i < similar.length; i++) {
      str += `<div>${similar[i].productId}</div><div>${similar[i].productName}</div>`;
    }

    div.innerHTML = str;

    let body = document.getElementsByTagName("body");

    body[0].appendChild(div);

    //docut id -

    // console.log(product);
    // console.log(shop);
    // console.log(similar);
  } catch (err) {
    console.log(err);
  }
}

showDetails(1);
