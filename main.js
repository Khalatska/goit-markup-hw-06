const modalElement = document.querySelector(".backdrop");
const btnOrder = document.querySelector(".hero-btn");
const btnClose = document.querySelector(".modal-close-btn");

btnOrder.addEventListener("click", () => {
  modalElement.classList.add("is-open");
});
btnClose.addEventListener("click", () => {
  modalElement.classList.remove("is-open");
});

const mobMenuElement = document.querySelector(".mob-menu");
const btnOpen = document.querySelector(".menu-open-btn");
const btnCloseMenu = document.querySelector(".menu-close-btn");

btnOpen.addEventListener("click", () => {
  mobMenuElement.classList.add("is-open");
  if (window.innerWidth < 768) {
    btnCloseMenu.style.display = "block";
    btnOpen.style.display = "none";
  }
});

btnCloseMenu.addEventListener("click", () => {
  mobMenuElement.classList.remove("is-open");
  if (window.innerWidth < 768) {
    btnOpen.style.display = "block";
    btnCloseMenu.style.display = "none";
  }
});
