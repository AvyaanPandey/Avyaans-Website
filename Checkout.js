
let cart = JSON.parse(localStorage.getItem("cart"))

let cart_body = document.getElementById("cart_items")
console.log(cart)
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("cart_items").innerHTML = ""; // Clear UI
    renderCart(); // Re-render updated cart
}
function renderCart(){
   for(let itemname in cart)
   {
      let elem = document.createElement("p")
      elem.textContent = itemname + cart[itemname]["img"] 
      cart_body.appendChild(elem)
   }
}
function renderCartOld(){
   for (let i = 0; i < cart.length; i++) {
      let item = document.createElement("div")
      item.setAttribute("id", "item_container")
      let productImg = document.createElement("img")
      console.log(cart[i])
      productImg.src = cart[i][1]

      item.appendChild(productImg)

      let productName = document.createElement("div")

      productName.textContent = cart[i][0]

      item.appendChild(productName)

      let price = document.createElement("div")

      price.textContent = cart[i][2]

      item.appendChild(price)

      const button = document.createElement("button");
      button.textContent = "Delete"
      item.appendChild(button)
      button.onclick = function() { removeItem(i); };
      payment_body.appendChild(item)

   }
}

renderCart()





