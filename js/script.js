const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");

mobileMenuBtn.addEventListener("click", navToggle);

function navToggle() {
  mobileMenuBtn.classList.toggle("open");
  mobileMenu.classList.toggle("flex");
  mobileMenu.classList.toggle("hidden");
}
