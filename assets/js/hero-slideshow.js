/* ==================================================
   HERO BEFORE AND AFTER SLIDESHOW STARTED
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const slideshow = document.getElementById("hero-slideshow");
  const primaryImage = document.getElementById("hero-slide-primary");
  const secondaryImage = document.getElementById("hero-slide-secondary");
  const roomLabel = document.getElementById("hero-slide-room");
  const statusLabel = document.getElementById("hero-slide-status");

  if (
    !slideshow ||
    !primaryImage ||
    !secondaryImage ||
    !roomLabel ||
    !statusLabel
  ) {
    return;
  }

  /* Slideshow Images */
  const slides = [
    {
      room: "1. Living Room",
      status: "before",
      src: "assets/images/hero/living-room-before.webp",
      alt: "Living room before professional cleaning",
    },
    {
      room: "1. Living Room",
      status: "after",
      src: "assets/images/hero/living-room-after.webp",
      alt: "Living room after professional cleaning",
    },
    {
      room: "2. Kitchen",
      status: "before",
      src: "assets/images/hero/kitchen-before.webp",
      alt: "Kitchen before professional cleaning",
    },
    {
      room: "2. Kitchen",
      status: "after",
      src: "assets/images/hero/kitchen-after.webp",
      alt: "Kitchen after professional cleaning",
    },
    {
      room: "3. Bathroom",
      status: "before",
      src: "assets/images/hero/bathroom-before.webp",
      alt: "Bathroom before professional cleaning",
    },
    {
      room: "3. Bathroom",
      status: "after",
      src: "assets/images/hero/bathroom-after.webp",
      alt: "Bathroom after professional cleaning",
    },
    {
      room: "4. Bedroom",
      status: "before",
      src: "assets/images/hero/bedroom-before.webp",
      alt: "Bedroom before professional cleaning",
    },
    {
      room: "4. Bedroom",
      status: "after",
      src: "assets/images/hero/bedroom-after.webp",
      alt: "Bedroom after professional cleaning",
    },
    {
      room: "5. Balcony",
      status: "before",
      src: "assets/images/hero/balcony-before.webp",
      alt: "Balcony before professional cleaning",
    },
    {
      room: "5. Balcony",
      status: "after",
      src: "assets/images/hero/balcony-after.webp",
      alt: "Balcony after professional cleaning",
    },
    {
      room: "6. Dining Area",
      status: "before",
      src: "assets/images/hero/dining-area-before.webp",
      alt: "Dining area before professional cleaning",
    },
    {
      room: "6. Dining Area",
      status: "after",
      src: "assets/images/hero/dining-area-after.webp",
      alt: "Dining area after professional cleaning",
    },
    {
      room: "7. Home Office",
      status: "before",
      src: "assets/images/hero/home-office-before.webp",
      alt: "Home office before professional cleaning",
    },
    {
      room: "7. Home Office",
      status: "after",
      src: "assets/images/hero/home-office-after.webp",
      alt: "Home office after professional cleaning",
    },
  ];

  /* Animation Settings */
  const slideDuration = 3000;
  const transitionDuration = 700;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  const imageLayers = [primaryImage, secondaryImage];

  let currentIndex = 0;
  let activeLayerIndex = 0;
  let transitionTimer = null;

  /* Update Room and Cleaning Status */
  function updateLabels(slide) {
    roomLabel.textContent = slide.room;

    const isAfter = slide.status === "after";

    statusLabel.textContent = isAfter ? "After Cleaning" : "Before Cleaning";

    statusLabel.classList.toggle("hero-slide-status--before", !isAfter);

    statusLabel.classList.toggle("hero-slide-status--after", isAfter);
  }

  /* Preload Upcoming Images */
  function preloadImage(index) {
    const image = new Image();
    image.src = slides[index % slides.length].src;
  }

  /* Show Next Slide */
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;

    const slide = slides[currentIndex];
    const nextLayerIndex = 1 - activeLayerIndex;

    const currentLayer = imageLayers[activeLayerIndex];
    const nextLayer = imageLayers[nextLayerIndex];

    const nextImage = new Image();
    nextImage.src = slide.src;

    nextImage.onload = () => {
      nextLayer.src = slide.src;
      nextLayer.alt = slide.alt;

      nextLayer.style.transitionDuration = prefersReducedMotion.matches
        ? "0ms"
        : `${transitionDuration}ms`;

      currentLayer.style.transitionDuration =
        nextLayer.style.transitionDuration;

      nextLayer.classList.add("hero-slide--active");
      currentLayer.classList.remove("hero-slide--active");

      nextLayer.setAttribute("aria-hidden", "false");
      currentLayer.setAttribute("aria-hidden", "true");
      currentLayer.alt = "";

      updateLabels(slide);
      activeLayerIndex = nextLayerIndex;

      preloadImage((currentIndex + 1) % slides.length);
    };

    nextImage.onerror = () => {
      console.warn("Hero slideshow image could not load:", slide.src);
    };
  }

  /* Initialize Slideshow */
  imageLayers[0].setAttribute("aria-hidden", "false");
  imageLayers[1].setAttribute("aria-hidden", "true");

  updateLabels(slides[0]);

  preloadImage(1);
  preloadImage(2);

  transitionTimer = window.setInterval(showNextSlide, slideDuration);

  /* Stop Timer When Page Is Unloaded */
  window.addEventListener(
    "pagehide",
    () => {
      window.clearInterval(transitionTimer);
    },
    { once: true },
  );
});

/* ==================================================
   HERO BEFORE AND AFTER SLIDESHOW ENDED
================================================== */
