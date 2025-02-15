
let cart = JSON.parse(localStorage.getItem("cart"))

let payment_body = document.getElementById("payment_body")
console.log(cart)
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    document.getElementById("payment_body").innerHTML = ""; // Clear UI
    renderCart(); // Re-render updated cart
}

function renderCart(){
   for (let i = 0; i < cart.length; i++) {
      let item = document.createElement("div")
      item.setAttribute("id", "item_container")
      let productImg = document.createElement("img")

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





