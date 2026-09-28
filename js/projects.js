import { filterCards } from "./filter.js";

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    filterCards(cards, button.dataset.filter);

    buttons.forEach((btn) => {
      const isActive = btn === button;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  });
});
