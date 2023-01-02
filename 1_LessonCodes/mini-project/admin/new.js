let btnEl = document.getElementById("btn");
let titleEl = document.getElementById("title");
let catEl = document.getElementById("category");
let priceEL = document.getElementById("price");
let fileEl = document.getElementById("image");
let inputHid = document.getElementById("id");

let radio = document.getElementsByName("isspecial");
let checkMul = document.getElementsByName("days");

btnEl.addEventListener("click", onSave);

initFunc();

async function onSave(event) {
  event.preventDefault();

  let ispe = false;
  let daysStr = "";
  let method = "";

  let location = window.location.search;

  let urlParams = new URLSearchParams(location);
  let id = urlParams.get("id");

  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      ispe = radio[i].value == "yes" ? true : false;
    }
  }

  for (let i = 0; i < checkMul.length; i++) {
    if (checkMul[i].checked) {
      console.log(checkMul[i].value);
      daysStr += checkMul[i].value + ",";
    }
  }

  const url = "https://api.cloudinary.com/v1_1/dcl41xano/upload";

  const files = document.querySelector("[type=file]").files;
  console.log(files);
  const formData = new FormData();

  let file = files[0];
  formData.append("file", file);
  formData.append("api_key", "248416337365527");
  formData.append("folder", "shop");
  formData.append("upload_preset", "jiwuy2l5");

  let secure = "";
  await fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // console.log(JSON.parse(data));
      // var str = JSON.stringify(JSON.parse(data), null, 4);
      // let obj = JSON.parse(data);

      secure = data.secure_url;
    })
    .catch((err) => console.log(err));

  console.log(daysStr);

  if (id) {
    await fetch(`http://localhost:4040/product/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleEl.value,
        category: catEl.value,
        price: priceEL.value,
        image: "test",
        isSpecial: ispe,
        days: daysStr.substring(0, daysStr.length - 1),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // window.location.href = "./index.html";

        console.log(data);
      });
  } else {
    await fetch("http://localhost:4040/product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleEl.value,
        category: catEl.value,
        price: priceEL.value,
        imageURL: secure,
        isSpecial: ispe,
        days: daysStr.substring(0, daysStr.length - 1),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "./index.html";

        console.log(data);
      });
  }
}

function initFunc() {
  let location = window.location.search;

  let urlParams = new URLSearchParams(location);
  let id = urlParams.get("id");

  inputHid.value = id;

  if (id && id.length > 0) {
    fetch(`http://localhost:4040/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        titleEl.value = data.product.title;
        catEl.value = data.product.category;
        priceEL.value = data.product.price;

        let str = data.product.isSpecial ? "yes" : "no";

        for (let i = 0; i < radio.length; i++) {
          if (radio[i].value == str) {
            radio[i].checked = true;
          }
        }

        let arr = data.product.days.split(",");

        for (let i = 0; i < checkMul.length; i++) {
          for (let x = 0; x < arr.length; x++) {
            if (checkMul[i].value == arr[x]) {
              checkMul[i].checked = true;
            }
          }
        }

        // fileEl =
      })
      .catch((err) => console.log(err));
  }
}
