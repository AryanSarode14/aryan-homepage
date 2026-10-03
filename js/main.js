const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#main-nav");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

const progressContainer = document.querySelector(".progress");
const totalSessions = Number(
  progressContainer?.getAttribute("aria-valuemax") ?? 57,
);
let currentSessions = Number(
  progressContainer?.getAttribute("aria-valuenow") ?? 0,
);

const progressBar = document.querySelector(".progress-bar");
const progressText = document.querySelector(".progress-text");
const minusButton = document.querySelector(".session-minus");
const plusButton = document.querySelector(".session-plus");

function renderProgress() {
  const percent = Math.round((currentSessions / totalSessions) * 100);
  progressBar.style.width = `${percent}%`;
  progressContainer.setAttribute("aria-valuenow", String(currentSessions));
  progressText.textContent = `${currentSessions} / ${totalSessions} (${percent}%)`;
}

if (minusButton && plusButton) {
  minusButton.addEventListener("click", () => {
    currentSessions = Math.max(0, currentSessions - 1);
    renderProgress();
  });

  plusButton.addEventListener("click", () => {
    currentSessions = Math.min(totalSessions, currentSessions + 1);
    renderProgress();
  });

  renderProgress();
}
