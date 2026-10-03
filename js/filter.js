export function filterCards(cards, category) {
  cards.forEach((card) => {
    const categories = (card.dataset.categories ?? "").trim().split(/\s+/);
    const matches = category === "all" || categories.includes(category);
    card.classList.toggle("hidden", !matches);
  });
}
