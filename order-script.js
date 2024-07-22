const carsArray = [
  {
    id: 1,
    name: "Vesta",
    price: 7000,
    img: "img/vesta.png",
    class: "economic",
    colors: ["Красный", "Зеленый", "Синий"],
  },
  {
    id: 2,
    name: "Hyundai i30",
    price: 12000,
    img: "img/i30n.png",
    class: "premium",
    colors: ["Красный", "Белый", "Синий"],
  },
  {
    id: 3,
    name: "Nissan Qashqai",
    price: 15000,
    img: "img/quashqai.webp",
    class: "premium",
    colors: ["Красный", "Серый"],
  },

  {
    id: 4,
    name: "Creta",
    price: 20000,
    img: "img/creta.png",
    class: "premium",
    colors: ["Серый", "Зеленый"],
  },

  {
    id: 5,
    name: "Skoda Octavia",
    price: 14000,
    img: "img/octavia.webp",
    class: "premium",
    colors: ["Белый", "Синий"],
  },

  {
    id: 6,
    name: "Elantra",
    price: 6000,
    img: "img/elantra.png",
    class: "economic",
    colors: ["Красный", "Серый", "Белый"],
  },

  {
    id: 7,
    name: "Solaris",
    price: 9000,
    img: "img/solaris.png",
    class: "economic",
    colors: ["Красный", "Зеленый", "Синий"],
  },
];
const citiesArray = [
  {
    id: 1,
    name: "Ульяновск",
    geoposition: [54.314192, 48.403132],
  },
  {
    id: 2,
    name: "Москва",
    geoposition: [55.755864, 37.617698],
  },
  {
    id: 3,
    name: "Санкт-Петербург",
    geoposition: [59.938784, 30.314997],
  },
  {
    id: 4,
    name: "Екатеринбург",
    geoposition: [56.838011, 60.597474],
  },
  {
    id: 5,
    name: "Новосибирск",
    geoposition: [55.030204, 82.92043],
  },
  {
    id: 6,
    name: "Самара",
    geoposition: [53.195878, 50.100202],
  },
  {
    id: 7,
    name: "Саратов",
    geoposition: [53.195878, 50.100202],
  },
];
const pointsArray = [
  {
    id: 1,
    city: "Ульяновск",
    adress: "Нариманова 42",
    carsId: [1, 5, 7],
    geoposition: [54.337458, 48.382399],
  },
  {
    id: 2,
    city: "Ульяновск",
    adress: "Локомотивная 15",
    carsId: [2, 3, 6],
    geoposition: [54.287344, 48.362816],
  },
  {
    id: 3,
    city: "Ульяновск",
    adress: "Созидаителей 15",
    carsId: [1, 2, 3],
    geoposition: [54.366156, 48.589083],
  },
  {
    id: 4,
    city: "Москва",
    adress: "Краснопресненская 10",
    carsId: [1, 2, 3, 4, 5, 6, 7],
    geoposition: [55.75478, 37.563718],
  },
  {
    id: 5,
    city: "Санкт-Петербург",
    adress: "Косыгина 4",
    carsId: [2, 3, 4, 5, 7],
    geoposition: [59.940835, 30.456176],
  },
  {
    id: 6,
    city: "Екатеринбург",
    adress: "Ленина 10",
    carsId: [1, 2, 5, 6, 7],
    geoposition: [56.836337, 60.58735],
  },
  {
    id: 7,
    city: "Новосибирск",
    adress: "Почтовая 10",
    carsId: [1, 2, 3, 4],
    geoposition: [55.051061, 83.009264],
  },
  {
    id: 8,
    city: "Саратов",
    adress: "Горького 74",
    carsId: [1, 3],
    geoposition: [51.539803, 46.03564],
  },
  {
    id: 9,
    city: "Самара",
    adress: "Л. Толстого 15",
    carsId: [1, 7],
    geoposition: [53.192727, 50.0913],
  },
  {
    id: 10,
    city: "Саратов",
    adress: "Клубная 5",
    carsId: [1, 6],
    geoposition: [51.610678, 45.91055],
  },
  {
    id: 11,
    city: "Самара",
    adress: "К. Маркса 49",
    carsId: [1, 6],
    geoposition: [53.196461, 50.149169],
  },
  {
    id: 12,
    city: "Новосибирск",
    adress: "К. Маркса 51",
    carsId: [1, 2, 6],
    geoposition: [54.991372, 82.909407],
  },
  {
    id: 13,
    city: "Москва",
    adress: "Энтузиастов 26",
    carsId: [1, 2, 3, 4, 7],
    geoposition: [55.750945, 37.719378],
  },
];

function getminMaxPrice(city) {
  let min = 999999;
  let max = 0;
  for (let i = 0; i < pointsArray.length; i++) {
    if (pointsArray[i].city.includes(city)) {
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

function getminMaxPriceInPoint(pointAdress) {
  let min = 400000;
  let max = 0;
  let currentPoint = pointsArray.find((point) => point.adress === pointAdress);
  if (currentPoint) {
    currentPoint.carsId.forEach((carId) => {
      if (carsArray[carId - 1].price < min) {
        min = carsArray[carId - 1].price;
      }
      if (carsArray[carId - 1].price > max) {
        max = carsArray[carId - 1].price;
      }
    });
  }
  return "от " + min + " до " + max;
}
function generateRandomPhoneNumber() {
  let phone = "+7";
  let code = Math.floor(Math.random() * 999)
    .toString()
    .padStart(4, "0");
  phone += "(" + code;
  code = Math.floor(Math.random() * 99)
    .toString()
    .padStart(2, "0");
  phone += ")" + code;
  code = Math.floor(Math.random() * 99)
    .toString()
    .padStart(2, "0");
  phone += "-" + code;
  code = Math.floor(Math.random() * 99)
    .toString()
    .padStart(2, "0");
  phone += "-" + code;
  return phone;
}
window.onload = () => {
  const orderNavLocation = document.getElementById("orderNavLocation");
  const orderNavModel = document.getElementById("orderNavModel");
  const orderNavOptions = document.getElementById("orderNavOptions");
  const orderNavResult = document.getElementById("orderNavResult");
  const dropdownMenu = document.getElementById("dropdown-menu");
  const inputDropdown = document.getElementById("input-dropdown");
  const cityCrossBtn = document.getElementById("cityCleanBtn");
  const pointCrossBtn = document.getElementById("pointCleanBtn");
  const score = document.querySelector(".score");
  const adressOfPoint = score.querySelector(".adressOfPoint");
  const scorePrice = score.querySelector(".scorePrice");
  const inputPoint = document.getElementById("inputPoint");
  const pointsDropDownMenu = document.getElementById("pointsDropDownMenu");
  const scoreBtn = document.getElementById("scoreBtn");
  const location = document.querySelector(".location");
  const model = document.querySelector(".model");
  const options = document.querySelector(".options");
  const result = document.querySelector(".result");
  const carCards = document.querySelector(".carCards");
  const scoreInfo = score.querySelector(".scoreInfo");
  const scoreAdress = score.querySelector(".scoreAdress");
  const scoreModel = score.querySelector(".scoreModel");
  const scoreOptions = score.querySelector(".scoreOptions");
  const allModelBtn = document.getElementById("allModel");
  const economicBtn = document.getElementById("economic");
  const premiumBtn = document.getElementById("premium");

  //радио кнопки на странице "МОДЕЛЬ"
  allModelBtn.addEventListener("change", () => {
    if (allModelBtn.checked) {
      let pointIndex = pointsArray.findIndex(
        (point) =>
          point.city === inputDropdown.value &&
          point.adress === inputPoint.value
      );
      renderModels(pointIndex);
    }
    scoreModel.innerHTML = "";
    scoreOptions.innerHTML = "";
  });
  economicBtn.addEventListener("change", () => {
    if (economicBtn.checked) {
      let pointIndex = pointsArray.findIndex(
        (point) =>
          point.city === inputDropdown.value &&
          point.adress === inputPoint.value
      );
      renderModels(pointIndex);
      scoreModel.innerHTML = "";
      scoreOptions.innerHTML = "";
    }
  });
  premiumBtn.addEventListener("change", () => {
    if (premiumBtn.checked) {
      let pointIndex = pointsArray.findIndex(
        (point) =>
          point.city === inputDropdown.value &&
          point.adress === inputPoint.value
      );
      renderModels(pointIndex);
      scoreModel.innerHTML = "";
      scoreOptions.innerHTML = "";
    }
  });
  //переключение кнопок
  scoreBtn.addEventListener("click", () => {
    scoreBtn.disabled = true;

    if (scoreBtn.textContent === "Выбрать модель") {
      let pointIndex = pointsArray.findIndex(
        (point) =>
          point.city === inputDropdown.value &&
          point.adress === inputPoint.value
      );

      orderNavLocation.classList.remove("order-nav-active");
      orderNavModel.classList.add("order-nav-active");
      // слушатель событий на хлебные крошки "МОДЕЛЬ"
      orderNavModel.addEventListener("click", () => {
        orderNavModel.classList.add("order-nav-active");
        orderNavLocation.classList.remove("order-nav-active");
        orderNavOptions.classList.remove("order-nav-active");
        orderNavResult.classList.remove("order-nav-active");
        location.classList.add("hidden");
        model.classList.remove("hidden");
        options.classList.add("hidden");
        result.classList.add("hidden");
        scoreBtn.textContent = "Дополнительно";
        scoreBtn.disabled = false;
        scoreOptions.innerHTML = "";
      });
      location.classList.add("hidden");
      model.classList.remove("hidden");
      carCards.innerHTML = "";
      renderModels(pointIndex);
      scoreBtn.textContent = "Дополнительно";
      return;
    }
    if (scoreBtn.textContent === "Дополнительно") {
      model.classList.add("hidden");
      options.classList.remove("hidden");
      orderNavModel.classList.remove("order-nav-active");
      orderNavOptions.classList.add("order-nav-active");
      scoreBtn.textContent = "Итого";
      return;
    }
    if (scoreBtn.textContent === "Итого") {
      options.classList.add("hidden");
      result.classList.remove("hidden");
      scoreBtn.textContent = "Заказать";
      return;
    }
  });
  function renderModels(pointId) {
    carCards.innerHTML = "";
    if (allModelBtn.checked) {
      pointsArray[pointId].carsId.forEach((carId) => {
        let car = carsArray[carId - 1];

        let carCard = document.createElement("div");
        carCard.classList.add("carCard");
        let carName = document.createElement("h2");
        carName.classList.add("carModel");
        carName.textContent = car.name;
        carCard.appendChild(carName);

        let carPrice = document.createElement("p");
        carPrice.classList.add("carPrice");
        carPrice.textContent = car.price + " ₽.";
        carCard.appendChild(carPrice);
        let carImg = document.createElement("img");
        carImg.classList.add("carImg");
        carImg.alt = car.name;
        carImg.width = "256";
        carImg.src = car.img;
        carCard.appendChild(carImg);
        carCard.addEventListener("click", () => {
          let allCards = document.querySelectorAll(".carCard");
          allCards.forEach((card) => {
            card.classList.remove("chosen");
          });
          carCard.classList.add("chosen");
          scorePrice.textContent = car.price + " ₽.";
          scoreBtn.disabled = false;
          scoreBtn.textContent = "Дополнительно";
          let newLine = scoreAdress.cloneNode(true);
          newLine.querySelector(".scoreTitle").textContent = "Модель:";
          newLine.querySelector(".adressOfPoint").textContent = car.name;
          scoreModel.innerHTML = newLine.innerHTML;
        });
        carCards.appendChild(carCard);
      });
    } else if (economicBtn.checked) {
      pointsArray[pointId].carsId.forEach((carId) => {
        let car = carsArray[carId - 1];
        if (car.class === "economic") {
          let carCard = document.createElement("div");
          carCard.classList.add("carCard");
          let carName = document.createElement("h2");
          carName.classList.add("carModel");
          carName.textContent = car.name;
          carCard.appendChild(carName);

          let carPrice = document.createElement("p");
          carPrice.classList.add("carPrice");
          carPrice.textContent = car.price + " ₽.";
          carCard.appendChild(carPrice);
          let carImg = document.createElement("img");
          carImg.classList.add("carImg");
          carImg.alt = car.name;
          carImg.width = "256";
          carImg.src = car.img;
          carCard.appendChild(carImg);
          carCard.addEventListener("click", () => {
            let allCards = document.querySelectorAll(".carCard");
            allCards.forEach((card) => {
              card.classList.remove("chosen");
            });
            carCard.classList.add("chosen");
            scorePrice.textContent = car.price + " ₽.";
            scoreBtn.disabled = false;
            scoreBtn.textContent = "Дополнительно";
            let newLine = scoreAdress.cloneNode(true);
            newLine.querySelector(".scoreTitle").textContent = "Модель:";
            newLine.querySelector(".adressOfPoint").textContent = car.name;
            scoreModel.innerHTML = newLine.innerHTML;
          });
          carCards.appendChild(carCard);
        }
      });
    } else if (premiumBtn.checked) {
      pointsArray[pointId].carsId.forEach((carId) => {
        let car = carsArray[carId - 1];
        if (car.class === "premium") {
          let carCard = document.createElement("div");
          carCard.classList.add("carCard");
          let carName = document.createElement("h2");
          carName.classList.add("carModel");
          carName.textContent = car.name;
          carCard.appendChild(carName);

          let carPrice = document.createElement("p");
          carPrice.classList.add("carPrice");
          carPrice.textContent = car.price + " ₽.";
          carCard.appendChild(carPrice);
          let carImg = document.createElement("img");
          carImg.classList.add("carImg");
          carImg.alt = car.name;
          carImg.width = "256";
          carImg.src = car.img;
          carCard.appendChild(carImg);
          carCard.addEventListener("click", () => {
            let allCards = document.querySelectorAll(".carCard");
            allCards.forEach((card) => {
              card.classList.remove("chosen");
            });
            carCard.classList.add("chosen");
            scorePrice.textContent = car.price + " ₽.";
            scoreBtn.disabled = false;
            scoreBtn.textContent = "Дополнительно";
            let newLine = scoreAdress.cloneNode(true);
            newLine.querySelector(".scoreTitle").textContent = "Модель:";
            newLine.querySelector(".adressOfPoint").textContent = car.name;
            scoreModel.innerHTML = newLine.innerHTML;
          });
          carCards.appendChild(carCard);
        }
      });
    }
  }
  //появление меню
  function createCities() {
    for (let i = 0; i < citiesArray.length; i++) {
      let item = document.createElement("li");
      item.textContent = citiesArray[i].name;
      dropdownMenu.appendChild(item);
    }
  }
  function createPoints() {
    pointsArray.filter((point) => {
      if (point.city.includes(inputDropdown.value)) {
        let item = document.createElement("li");
        item.textContent = point.adress;
        pointsDropDownMenu.appendChild(item);
      }
    });
  }
  createCities();

  function filtration() {
    const menuItems = dropdownMenu.querySelectorAll("li");
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
  function pointFiltration() {
    const menuItems = pointsDropDownMenu.querySelectorAll("li");
    menuItems.forEach((menuItem) => {
      if (
        menuItem.textContent
          .toLowerCase()
          .includes(inputPoint.value.toLowerCase())
      ) {
        menuItem.style.display = "block";
      } else {
        menuItem.style.display = "none";
      }
    });
  }
  function crossBtnStatusChecker(input, btn) {
    if (input.value === "") {
      btn.style.display = "none";
    } else {
      btn.style.display = "block";
    }
  }
  // появление меню по фокусу
  inputDropdown.addEventListener("focus", () => {
    crossBtnStatusChecker(inputDropdown, cityCrossBtn);
    filtration();
    dropdownMenu.style.display = "block";
  });
  inputPoint.addEventListener("focus", () => {
    crossBtnStatusChecker(inputPoint, pointCrossBtn);
    createPoints();
    pointsDropDownMenu.style.display = "block";
    pointFiltration();
  });

  //фильтр по вводу, который скрывает элменты, которые не содержат введенное значение
  inputDropdown.addEventListener("input", (event) => {
    crossBtnStatusChecker(inputDropdown, cityCrossBtn);
    filtration();
    inputPoint.disabled = true;
    scoreBtn.disabled = true;
  });
  inputPoint.addEventListener("input", (event) => {
    crossBtnStatusChecker(inputPoint, pointCrossBtn);
    pointFiltration();
    scoreBtn.disabled = true;
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
    if (
      !pointsDropDownMenu.contains(event.target) &&
      !Array.from(pointsDropDownMenu.children).some((li) =>
        li.contains(event.target)
      ) &&
      !inputPoint.contains(event.target)
    ) {
      while (pointsDropDownMenu.hasChildNodes()) {
        pointsDropDownMenu.removeChild(pointsDropDownMenu.lastChild);
      }
      pointsDropDownMenu.style.display = "none";
    }
  });
  // переносим значение выбранного элемента списка в поле ввода
  dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      inputDropdown.value = event.target.textContent;
      dropdownMenu.style.display = "none";
      crossBtnStatusChecker(inputDropdown, cityCrossBtn);
      adressOfPoint.textContent = event.target.textContent;
      scorePrice.textContent = getminMaxPrice(event.target.textContent);
      inputPoint.disabled = false;
      while (pointsDropDownMenu.hasChildNodes()) {
        pointsDropDownMenu.removeChild(pointsDropDownMenu.lastChild);
      }
      setCityPan();
    }
  });

  //переносим значение выбранного элемента списка в поле ввода
  pointsDropDownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      inputPoint.value = event.target.textContent;
      pointsDropDownMenu.style.display = "none";
      crossBtnStatusChecker(inputPoint, pointCrossBtn);
      scorePrice.textContent = getminMaxPriceInPoint(inputPoint.value);
      adressOfPoint.textContent = inputDropdown.value + ", " + inputPoint.value;
      while (pointsDropDownMenu.lastElementChild) {
        pointsDropDownMenu.removeChild(pointsDropDownMenu.lastElementChild);
      }
      scoreBtn.disabled = false;
      setPointPan();
    }
  });

  // очистка поля ввода крестиком

  cityCrossBtn.addEventListener("click", () => {
    inputDropdown.value = "";
    cityCrossBtn.style.display = "none";
    pointCrossBtn.style.display = "none";
    inputPoint.value = "";
    inputPoint.disabled = true;
    while (pointsDropDownMenu.hasChildNodes()) {
      pointsDropDownMenu.removeChild(pointsDropDownMenu.lastChild);
    }
    scorePrice.textContent = "...";
    adressOfPoint.textContent = "не выбран";
    scoreBtn.disabled = true;
  });
  pointCrossBtn.addEventListener("click", () => {
    document.getElementById("inputPoint").value = "";
    pointCrossBtn.style.display = "none";
    adressOfPoint.textContent = inputDropdown.value;
    scorePrice.textContent = getminMaxPrice(adressOfPoint.textContent);
    scoreBtn.disabled = true;
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

  function getCityLocation() {
    let position = [];
    citiesArray.forEach((city) => {
      if (city.name === inputDropdown.value) {
        position = city.geoposition;
      }
    });

    return position;
  }

  function getPointPosition() {
    let position = [];
    pointsArray.forEach((point) => {
      if (
        point.city === inputDropdown.value &&
        point.adress === inputPoint.value
      ) {
        position = point.geoposition;
      }
    });
    return position;
  }

  // карта
  ymaps.ready(init);
  let myMap;
  function setCityPan() {
    let point = getCityLocation();
    // Плавное перемещение центра карты в точку с новыми координатами.
    myMap.panTo(point, {
      // Задержка между перемещениями.
      delay: 1500,
    });
  }

  function setPointPan() {
    let point = getPointPosition();
    myMap.panTo(point, {
      delay: 1500,
    });
  }
  function init() {
    // Создание карты.
    myMap = new ymaps.Map("map", {
      center: [54.314192, 48.403132],
      zoom: 12,
    });
    pointsArray.forEach((point) => {
      var myPlacemark = new ymaps.Placemark(
        point.geoposition,
        {
          balloonContentHeader: "Need for Drive",
          balloonContentBody: point.city + ", " + point.adress,
          balloonContentFooter: generateRandomPhoneNumber(),
          hintContent: point.city + ", " + point.adress,
        },
        {
          iconLayout: "default#image",
          iconImageHref: "img/mapMark.png",
          iconImageSize: [25, 25],
          iconImageOffset: [-10, -12],
        }
      );

      myMap.geoObjects.add(myPlacemark);
      myPlacemark.events.add("click", function () {
        inputDropdown.value = point.city;
        inputPoint.value = point.adress;
        crossBtnStatusChecker(inputDropdown, cityCrossBtn);
        crossBtnStatusChecker(inputPoint, pointCrossBtn);
        scorePrice.textContent = getminMaxPrice(point.adress);
        adressOfPoint.textContent = point.city + ", " + point.adress;
        scoreBtn.disabled = false;
        inputPoint.disabled = false;
        pointsDropDownMenu.style.display = "none";
        while (pointsDropDownMenu.hasChildNodes()) {
          pointsDropDownMenu.removeChild(pointsDropDownMenu.lastChild);
        }
        scorePrice.textContent = getminMaxPriceInPoint(point.adress);
        adressOfPoint.textContent = point.city + ", " + point.adress;
      });
    });
  }
  // переключение хлебных крошек
};
