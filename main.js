const modalElement = document.querySelector(".backdrop");
const btnOrder = document.querySelector(".hero-btn");
const btnClose = document.querySelector(".modal-close-btn");

btnOrder.addEventListener("click", () => {
  modalElement.classList.add("is-open");
});
btnClose.addEventListener("click", () => {
  modalElement.classList.remove("is-open");
});
