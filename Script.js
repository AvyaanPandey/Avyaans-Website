localStorage.setItem("cart", JSON.stringify([]))

let cart = JSON.parse(localStorage.getItem("cart"))
function addToCart(item){


  cart.push(item)

  localStorage.setItem("cart", JSON.stringify(cart))
}





