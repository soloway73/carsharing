//бургерное меню
const iconMenu = document.querySelectorAll(".menu-icon");
const menuBody = document.querySelector(".links");

for (let i = 0; i < iconMenu.length; i++) {
  if (iconMenu[i]) {
    iconMenu[i].addEventListener("click", function (e) {
      document.body.classList.toggle("lock");
      menuBody.classList.toggle("_active");
      iconMenu[i].classList.toggle("_active");
    });
  }
}

let links = menuBody.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menuBody.classList.remove("_active");
    iconMenu.classList.remove("_active");
    document.body.classList.remove("lock");
  });
}
