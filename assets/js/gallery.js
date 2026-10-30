/* ==================================================
   SECTION 8 BEFORE & AFTER GALLERY SLIDER STARTED
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".cleaning-gallery-slider");

  if (!slider) return;

  const track = slider.querySelector(".cleaning-gallery-grid");
  const cards = [...track.querySelectorAll(".cleaning-gallery-card")];
  const prevButton = slider.querySelector(".cleaning-gallery-prev");
  const nextButton = slider.querySelector(".cleaning-gallery-next");
  const dots = [...slider.querySelectorAll(".cleaning-gallery-dot")];
  const counter = slider.querySelector(".cleaning-gallery-counter");

  let currentIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth < 768) return 1;
    return 2;
  }

  function updateSlider() {
    const visibleCards = getVisibleCards();
    const maxIndex = Math.max(0, cards.length - visibleCards);

    currentIndex = Math.min(Math.max(currentIndex, 0), maxIndex);

    const firstCard = cards[0];
    const offset = firstCard
      ? cards[currentIndex].offsetLeft - firstCard.offsetLeft
      : 0;

    track.style.transform = `translateX(-${offset}px)`;

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maxIndex;

    const start = currentIndex + 1;
    const end = Math.min(currentIndex + visibleCards, cards.length);

    counter.textContent = `Showing ${start}–${end} of ${cards.length} transformations`;

    cards.forEach((card, index) => {
      const visible =
        index >= currentIndex && index < currentIndex + visibleCards;

      card.setAttribute("aria-hidden", String(!visible));
    });

    dots.forEach((dot, index) => {
      const active = index === currentIndex;

      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));

      // A dot selects its card as the first visible card,
      // except near the end where the last full group is shown.
    });
  }

  prevButton.addEventListener("click", () => {
    currentIndex--;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    currentIndex++;
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = Math.min(
        index,
        Math.max(0, cards.length - getVisibleCards()),
      );

      updateSlider();
    });
  });

  window.addEventListener("resize", updateSlider);

  updateSlider();
});

/* ==================================================
   SECTION 8 BEFORE & AFTER GALLERY SLIDER ENDED
================================================== */
