const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const links = document.getElementById("links");

menuOpen.addEventListener("click", () => {
  menuClose.classList.add("show");
  menuOpen.classList.remove("show"); 
  links.classList.add("show")
});

menuClose.addEventListener("click", () => {
  menuClose.classList.remove("show");
  menuOpen.classList.add("show");
  links.classList.remove("show")
});
