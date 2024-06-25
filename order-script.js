// window.onload = () => {
//   const dropdownMenu = document.getElementById("dropdown-menu");
//   const inputDropdown = document.getElementById("input-dropdown");
//   const menuItems = dropdownMenu.querySelectorAll("li");
//   const cityCrossBtn = document.getElementById("cityCleanBtn");
//   const pointCrossBtn = document.getElementById("pointCleanBtn");

//   //появление меню
//   function filtration() {
//     menuItems.forEach((menuItem) => {
//       if (
//         menuItem.textContent
//           .toLowerCase()
//           .includes(inputDropdown.value.toLowerCase())
//       ) {
//         menuItem.style.display = "block";
//       } else {
//         menuItem.style.display = "none";
//       }
//     });
//   }
//   function crossBtnStatusChecker() {
//     if (inputDropdown.value === "") {
//       cityCrossBtn.style.display = "none";
//     } else {
//       cityCrossBtn.style.display = "block";
//     }
//   }

//   inputDropdown.addEventListener("focus", () => {
//     crossBtnStatusChecker();
//     dropdownMenu.style.display = "block";
//     filtration();
//   });

//   //фильтр по вводу, который скрывает элменты, которые не содержат введенное значение
//   inputDropdown.addEventListener("input", (event) => {
//     // inputValue = event.target.value.toLowerCase();
//     crossBtnStatusChecker();
//     filtration();
//   });

//   // закрываем выпадающий список кликом на любой элемент вне выпадающего списка
//   document.addEventListener("click", (event) => {
//     if (
//       !dropdownMenu.contains(event.target) &&
//       !Array.from(dropdownMenu.children).some((li) =>
//         li.contains(event.target)
//       ) &&
//       !inputDropdown.contains(event.target)
//     ) {
//       dropdownMenu.style.display = "none";
//     }
//   });
//   // переносим значение выбранного элемента списка в поле ввода
//   dropdownMenu.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//       inputDropdown.value = event.target.textContent;
//       dropdownMenu.style.display = "none";
//       crossBtnStatusChecker();
//     }
//   });

//   // очистка поля ввода крестиком

//   cityCrossBtn.addEventListener("click", () => {
//     document.getElementById("input-dropdown").value = "";
//     cityCrossBtn.style.display = "none";
//   });
//   pointCrossBtn.addEventListener("click", () => {
//     document.getElementById("inputPoint").value = "";
//   });

//   // бургерное меню
//   const iconMenu = document.querySelectorAll(".menu-icon");
//   const menuBody = document.querySelector(".links");
//   const desktop = document.querySelector(".desktop");
//   for (let i = 0; i < iconMenu.length; i++) {
//     if (iconMenu[i]) {
//       iconMenu[i].addEventListener("click", function (e) {
//         document.body.classList.toggle("lock");
//         menuBody.classList.toggle("_active");
//         iconMenu[i].classList.toggle("_active");
//         desktop.classList.toggle("blacked");
//       });
//     }
//   }

//   let links = menuBody.querySelectorAll("a");

//   for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener("click", function () {
//       menuBody.classList.remove("_active");
//       iconMenu.classList.remove("_active");
//       document.body.classList.remove("lock");
//     });
//   }
// };
window.onload = () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const inputDropdown = document.getElementById("input-dropdown");
  const menuItems = dropdownMenu.querySelectorAll("li");
  const cityCrossBtn = document.getElementById("cityCleanBtn");
  const pointCrossBtn = document.getElementById("pointCleanBtn");

  //появление меню
  function filtration() {
    menuItems.forEach((menuItem) => {
      if (
        menuItem.textContent
          .toLowerCase()
          .includes(inputDropdown.value.toLowerCase())
      ) {
        menuItem.style.display = "block";
      } else {
        menuItem.style.display = "none";
      }
    });
  }

  function crossBtnStatusChecker() {
    if (inputDropdown.value === "") {
      cityCrossBtn.style.display = "none";
    } else {
      cityCrossBtn.style.display = "block";
    }
  }

  inputDropdown.addEventListener("focus", () => {
    crossBtnStatusChecker();
    dropdownMenu.style.display = "block";
    filtration();
  });

  //фильтр по вводу, который скрывает элменты, которые не содержат введенное значение
  inputDropdown.addEventListener("input", (event) => {
    crossBtnStatusChecker();
    filtration();
  });

  // закрываем выпадающий список кликом на любой элемент вне выпадающего списка
  document.addEventListener("click", (event) => {
    if (
      !dropdownMenu.contains(event.target) &&
      !Array.from(dropdownMenu.children).some((li) =>
        li.contains(event.target)
      ) &&
      !inputDropdown.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }
  });

  // переносим значение выбранного элемента списка в поле ввода
  dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      inputDropdown.value = event.target.textContent;
      dropdownMenu.style.display = "none";
      crossBtnStatusChecker();
    }
  });

  // очистка поля ввода крестиком

  cityCrossBtn.addEventListener("click", () => {
    document.getElementById("input-dropdown").value = "";
    cityCrossBtn.style.display = "none";
  });
  pointCrossBtn.addEventListener("click", () => {
    document.getElementById("inputPoint").value = "";
  });

  // бургерное меню
  const iconMenu = document.querySelectorAll(".menu-icon");
  const menuBody = document.querySelector(".links");
  const desktop = document.querySelector(".desktop");
  for (let i = 0; i < iconMenu.length; i++) {
    if (iconMenu[i]) {
      iconMenu[i].addEventListener("click", function (e) {
        document.body.classList.toggle("lock");
        menuBody.classList.toggle("_active");
        this.classList.toggle("_active");
        desktop.classList.toggle("blacked");
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
};
