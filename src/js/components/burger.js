document.querySelector(".burger").addEventListener("click", function() {
  document.querySelector(".nav__burger").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".nav__burger").classList.remove("active");
})
