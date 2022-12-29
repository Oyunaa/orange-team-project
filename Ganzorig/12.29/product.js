let btnEl = document.getElementById("btn")
let titleEl = document.getElementById("title")
let catEl = document.getElementById("category")
let priceEl = document.getElementById("price")
let fileEL = document.getElementById("image")


let radio = document.getElementsByName("isspecial")
let checkMul = document.getElementsByName("days")

  btnEl.addEventListener("click" , onSave)

  function onSave(e){
    let ispe = false;
    let daysStr = "";

    for(let i =0 ; i< radio.length; i++){
        console.log(radio[i]);
        if(radio[i].checked)
    }
   
fetch("http://localhost:4040/product",  {
    method : "POST",
    headers: {"Content-Type" : "application/json"},
    body :JSON.stringify({
        title : titleEl.ariaValueMax,
        category: catEl.ariaValueMax,
        price: priceEl.value,
        image: "test",
        isSpecial :true,
        days:"",
    })
})
  }