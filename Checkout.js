
let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
 for(let i = 0; i < cart.length; i++){
   let item = document.createElement("div")
    item.append(cart[i])
   let payment_body = document.getElementsByClassName("payment_body")
   payment_body.append(item)
 }
console.log(cart)