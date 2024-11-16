localStorage.setItem("cart", JSON.stringify([]))

function addToCart(item){
 
  let cart = JSON.parse(localStorage.getItem("cart"))

  cart.push(item)

  localStorage.setItem("cart", JSON.stringify(cart))
}



