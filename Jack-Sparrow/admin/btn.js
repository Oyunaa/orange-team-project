let btnEl = document.getElementById("save")
let titleEl = document.getElementById("title")
let priceEl = document.getElementById("price")
let imageEl = document.getElementById("image")
let categoryEl = document.getElementById("category")
let radio = document.getElementsByName("isSpecial")
let checkDay = document.getElementsByName("days")
let inputHidden = document.getElementsByName("id")
btnEl.addEventListener("click", onSave)
function onSave(event) {
    event.preventDefualt();
    let isSpe = false;
    let daysStr = ''
    for (let i = 0; i < radio.length; i++) {
        console.log(radio[i]);
        if(radio[i].checked){
            isSpe = radio[i].value == 'yes' ? true:false;
        }
    }
    for (let i = 0; i < checkDay.length; i++) {
        if(checkDay[i].checked){
            daysStr += checkDay[i].value + ",";
            console.log(checkDay[i].value);
        }
    }
    
    fetch ("http://192.168.1.198:4040/product",{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            title: titleEl.value,
            category: categoryEl.value,
            price: priceEl.value,
            image: "test",
            isSpecial: isSpe,
            days: daysStr.substring(0,daysStr.length-1)
        })
    })


}
function initpro(){
    let location = window.location.search
    let URLparams = new URLSearchParams(location)
    let id = URLparams.get("id")
    inputHidden.value = id
    // if id
    fetch(`http://192.168.1.198:4040/product/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        titleEl.value = data.product.title
        categoryEl.value = data.product.category
        priceEl.value = data.product.price
        let str = data.product.isSpecial ? "yes" : "no"
        for (let i = 0; i < radio.length; i++) {
            if(radio[i].value == str){
                radio[i].checked = true
            }
        }
        let arr = data.product.days.split(",")
        for (let k = 0; k < checkDay.length; k++) {
            checkDay[i].checked = true
            
        }
        console.log(data)})
    .catch((data)=>console.log(data))
}