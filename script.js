function addToCart(name, price) {
  alert(name + " added to cart!\nPrice: ₹" + price);
}



function goToSummary(name, price) {
  localStorage.setItem("productName", name);
  localStorage.setItem("productPrice", price);
  window.location.href = "summary.html";
}

let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  document.getElementById("cartCount").innerText = cart.length;
  alert(name + " added to cart!");
}
function searchProduct() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector("h2").innerText.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
function saveOrder(name, price) {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({name, price});
  localStorage.setItem("orders", JSON.stringify(orders));
}
function register() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("user", JSON.stringify({email, password}));
  alert("Registered Successfully!");
}



function goToPayment() {
  window.location.href = "payment.html";
}
const CACHE_NAME = "calculator-store-v3";




