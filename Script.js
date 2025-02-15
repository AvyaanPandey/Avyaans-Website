// Initialize an empty cart in localStorage
localStorage.setItem("cart", JSON.stringify([]));

function addToCart(item) {
  // Retrieve existing cart array or initialize an empty array
  let storedItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Ensure item is an array; if not, convert it into one


  // Add new items to the array
  storedItems.push(...item);

  // Save updated array back to localStorage
  localStorage.setItem("cart", JSON.stringify(storedItems));
}




