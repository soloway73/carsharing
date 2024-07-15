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

const carsArray = [
  {
    id: 1,
    name: "Vesta",
    price: 7000,
  },
  {
    id: 2,
    name: "Hyundai i30",
    price: 12000,
  },
  {
    id: 3,
    name: "Nissan Qashqai",
    price: 15000,
  },

  {
    id: 4,
    name: "Toyota Camry",
    price: 20000,
  },

  {
    id: 5,
    name: "Skoda Octavia",
    price: 14000,
  },

  {
    id: 6,
    name: "Renault Logan",
    price: 6000,
  },

  {
    id: 7,
    name: "Solaris",
    price: 9000,
  },
];

const pointsArray = [
  {
    id: 1,
    city: "Ульяновск",
    adress: "Нариманова 42",
    carsId: [1, 5, 7],
  },
  {
    id: 2,
    city: "Ульяновск",
    adress: "Локомотивная 15",
    carsId: [2, 3, 6],
  },
  {
    id: 3,
    city: "Ульяновск",
    adress: "Созидаителей 15",
    carsId: [1, 2, 3, 6],
  },
  {
    id: 4,
    city: "Москва",
    adress: "Краснопресненская 10",
    carsId: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: 5,
    city: "Санкт-Петербург",
    adress: "Косыгина 10",
    carsId: [2, 3, 4, 5, 7],
  },
  {
    id: 6,
    city: "Екатеринбург",
    adress: "Ленина 10",
    carsId: [1, 2, 5, 6, 7],
  },
  {
    id: 7,
    city: "Новосибирск",
    adress: "Почтовая 10",
    carsId: [1, 2, 3, 4],
  },
  {
    id: 8,
    city: "Саратов",
    adress: "Ленина 10",
    carsId: [1, 3],
  },
  {
    id: 9,
    city: "Самара",
    adress: "Пушкина 11",
    carsId: [1, 7],
  },
];

function getminMaxPrice(inputValue) {
  let min = carsArray[0].price;
  let max = carsArray[0].price;
  for (let i = 0; i < pointsArray.length; i++) {
    if (pointsArray[i].city.includes(inputValue)) {
      pointsArray[i].carsId.forEach((carId) => {
        if (carsArray[carId - 1].price < min) {
          min = carsArray[carId - 1].price;
        }
        if (carsArray[carId - 1].price > max) {
          max = carsArray[carId - 1].price;
        }
      });
    }
  }

  return "от " + min + " до " + max;
}

window.onload = () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const inputDropdown = document.getElementById("input-dropdown");
  const menuItems = dropdownMenu.querySelectorAll("li");
  const cityCrossBtn = document.getElementById("cityCleanBtn");
  const pointCrossBtn = document.getElementById("pointCleanBtn");
  const score = document.querySelector(".score");
  const adressOfPoint = score.querySelector(".adressOfPoint");
  const scorePrice = score.querySelector(".scorePrice");

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
      adressOfPoint.textContent = event.target.textContent;
      scorePrice.textContent = getminMaxPrice(event.target.textContent);
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
