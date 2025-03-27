// Initialize an empty cart in localStorage
localStorage.setItem("cart", JSON.stringify({}));

function addToCart(item) {
  var itemname = item[0]
  console.log(itemname)
  // Retrieve existing cart array or initialize an empty array
  let storedItems = JSON.parse(localStorage.getItem("cart")) || {};
 storedItems[itemname] = {
   name:itemname, 
   img: item[1]
 }
  

  // Ensure item is an array; if not, convert it into one




  // Save updated array back to localStorage
  localStorage.setItem("cart", JSON.stringify(storedItems));
}




