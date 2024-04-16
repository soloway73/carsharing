//бургерное меню
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".links");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    menuBody.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

let links = menuBody.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    menuBody.classList.remove("_active");
    iconMenu.classList.remove("_active");
    document.body.classList.remove("lock");
  });
}
