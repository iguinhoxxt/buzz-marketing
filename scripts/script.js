const menu = document.querySelector("nav ul");
const menuIcon = document.querySelector("nav .menu-icon");
const menuIconImg = document.querySelector("nav .menu-icon img");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("activo");
  if (menuIconImg.getAttribute("src") == "/images/menu.png") {
    menuIconImg.setAttribute("src", "/images/close.png");
  } else {
    menuIconImg.setAttribute("src", "/images/menu.png");
  }
});
