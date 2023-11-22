var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
};

var button = document.querySelector(".button");
var menu = document.querySelector(".menu");
var openMenu = function () {
  menu.classList.toggle("is-open");
  button.classList.toggle("is-active");
};

button.addEventListener("click", openMenu);

burger.addEventListener("click", toggleMenu);

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  burger.classList.toggle("is-active");
};


