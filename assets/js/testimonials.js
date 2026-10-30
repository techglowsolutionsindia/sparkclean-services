/* ==================================================
   10. CUSTOMER TESTIMONIALS SLIDER STARTED
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonials-slider");

  if (!slider) return;

  const viewport = slider.querySelector(".testimonials-viewport");
  const track = slider.querySelector(".testimonials-track");
  const cards = [...slider.querySelectorAll(".testimonial-card")];
  const previousButton = slider.querySelector(".testimonials-prev");
  const nextButton = slider.querySelector(".testimonials-next");
  const dotsContainer = slider.querySelector(".testimonials-dots");
  const counter = slider.querySelector(".testimonials-counter");

  if (
    !viewport ||
    !track ||
    !cards.length ||
    !previousButton ||
    !nextButton ||
    !dotsContainer
  ) {
    return;
  }

  let currentIndex = 0;
  let dots = [];

  /* Visible Cards Started */
  function getVisibleCards() {
    if (window.innerWidth <= 575) return 1;
    if (window.innerWidth <= 991) return 2;
    return 3;
  }
  /* Visible Cards Ended */

  /* Generate Pagination Started */
  function generateDots() {
    const visibleCards = getVisibleCards();
    const totalPositions = Math.max(1, cards.length - visibleCards + 1);

    dotsContainer.innerHTML = "";

    for (let index = 0; index < totalPositions; index++) {
      const dot = document.createElement("button");

      dot.type = "button";
      dot.className = "testimonials-dot";
      dot.setAttribute("aria-label", `Show testimonials from ${index + 1}`);

      dot.addEventListener("click", () => {
        currentIndex = index;
        updateSlider();
      });

      dotsContainer.appendChild(dot);
    }

    dots = [...dotsContainer.querySelectorAll(".testimonials-dot")];
  }
  /* Generate Pagination Ended */

  /* Update Slider Started */
  function updateSlider() {
    const visibleCards = getVisibleCards();
    const maximumIndex = Math.max(0, cards.length - visibleCards);

    currentIndex = Math.max(0, Math.min(currentIndex, maximumIndex));

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const offset = currentIndex * (cardWidth + gap);

    track.style.transform = `translate3d(-${offset}px, 0, 0)`;

    previousButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maximumIndex;

    if (counter) {
      const first = currentIndex + 1;
      const last = Math.min(currentIndex + visibleCards, cards.length);

      counter.textContent = `Showing ${first}–${last} of ${cards.length} experiences`;
    }

    dots.forEach((dot, index) => {
      const active = index === currentIndex;

      dot.classList.toggle("active", active);

      if (active) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  }
  /* Update Slider Ended */

  /* Previous Button Started */
  previousButton.addEventListener("click", () => {
    currentIndex--;
    updateSlider();
  });
  /* Previous Button Ended */

  /* Next Button Started */
  nextButton.addEventListener("click", () => {
    currentIndex++;
    updateSlider();
  });
  /* Next Button Ended */

  /* Keyboard Navigation Started */
  slider.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      currentIndex--;
      updateSlider();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      currentIndex++;
      updateSlider();
    }
  });
  /* Keyboard Navigation Ended */

  /* Responsive Updates Started */
  window.addEventListener("resize", () => {
    generateDots();
    updateSlider();
  });
  /* Responsive Updates Ended */

  /* Initialize Slider Started */
  generateDots();
  updateSlider();
  /* Initialize Slider Ended */
});

/* ==================================================
   10. CUSTOMER TESTIMONIALS SLIDER ENDED
================================================== */
