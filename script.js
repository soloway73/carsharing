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

// слайдер

let slides = document.querySelectorAll(".slide");
let slideControlLeft = document.querySelector(".left-button");
let slideControlRight = document.querySelector(".right-button");
let dot = document.querySelectorAll(".dot");

slides[0].style.opacity = "1";
dot[0].style.backgroundColor = "#0EC261";
let currentIndex = 0;

let switchSlide = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    dot[i].style.backgroundColor = "#fff";
  }
  slides[currentIndex].style.opacity = "1";
  dot[currentIndex].style.backgroundColor = "#0EC261";
};

slideControlLeft.onclick = function () {
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
    switchSlide();
  } else {
    currentIndex--;
    switchSlide();
  }
};
slideControlRight.onclick = function () {
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
    switchSlide();
  } else {
    currentIndex++;
    switchSlide();
  }
};
