
let cart = JSON.parse(localStorage.getItem("cart"))
console.log(cart)
let payment_body = document.getElementById("payment_body")
 for(let i = 0; i < cart.length; i++){
   let item = document.createElement("div")
    item.textContent = cart[i]
   
   payment_body.appendChild(item)
 }
console.log(cart)


// function removeItem(item){
//    let index = cart.indexOf(item)

//    if(index > -1){
//       cart.splice(index, 1)
//    }

//    localStorage.setItem('cart', JSON.stringify(cart))
// }
