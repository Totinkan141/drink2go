/* в этот файл добавляет скрипты */
const navMain = document.querySelector(".navigation");

if (navMain.classList.contains("navigation--nojs")) {
  navMain.classList.remove("navigation--nojs")
}

const navToggle = document.querySelector(".navigation__toggle");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("navigation--closed")) {
    navMain.classList.remove("navigation--closed");
    navMain.classList.add("navigation--opened");
  } else {
    navMain.classList.remove("navigation--opened");
    navMain.classList.add("navigation--closed");
  }
});
