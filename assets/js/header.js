/* ==================================================
   GLOBAL HEADER JAVASCRIPT STARTED
================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* Header Elements */
  const header = document.querySelector("#site-header");
  const menuToggle = document.querySelector(".header-menu-toggle");
  const navigation = document.querySelector(".header-nav");

  /* Dropdown Elements */
  const dropdownToggle = document.querySelector(".header-dropdown-toggle");
  const dropdownMenu = document.querySelector(".header-dropdown-menu");

  if (!header) return;

  /* ==================================================
     HEADER SCROLL EFFECT STARTED
  ================================================== */

  const updateHeaderOnScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 10);
  };

  updateHeaderOnScroll();

  window.addEventListener("scroll", updateHeaderOnScroll, {
    passive: true,
  });

  /* ==================================================
     HEADER SCROLL EFFECT ENDED
  ================================================== */

  /* ==================================================
     MORE EXPLORE DROPDOWN STARTED
  ================================================== */

  const setDropdownState = (isOpen) => {
    if (!dropdownToggle || !dropdownMenu) return;

    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
  };

  /* Toggle Dropdown */
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener("click", () => {
      const isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";

      setDropdownState(!isOpen);
    });

    /* Close Dropdown After Selecting a Link */
    dropdownMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setDropdownState(false);
      });
    });

    /* Close Dropdown When Clicking Outside */
    document.addEventListener("click", (event) => {
      if (
        !dropdownToggle.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
        setDropdownState(false);
      }
    });

    /* Close Dropdown With Escape Key */
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        dropdownToggle.getAttribute("aria-expanded") === "true"
      ) {
        setDropdownState(false);
        dropdownToggle.focus();
      }
    });
  }

  /* ==================================================
     MORE EXPLORE DROPDOWN ENDED
  ================================================== */

  /* ==================================================
     MOBILE NAVIGATION STARTED
  ================================================== */

  if (!menuToggle || !navigation) return;

  const mobileBreakpoint = window.matchMedia("(max-width: 1024px)");

  const setMenuState = (isOpen) => {
    const shouldOpen = mobileBreakpoint.matches && isOpen;

    menuToggle.classList.toggle("is-active", shouldOpen);
    navigation.classList.toggle("is-open", shouldOpen);

    menuToggle.setAttribute("aria-expanded", String(shouldOpen));

    menuToggle.setAttribute(
      "aria-label",
      shouldOpen ? "Close navigation menu" : "Open navigation menu",
    );

    if (!shouldOpen) {
      setDropdownState(false);
    }
  };

  /* Toggle Mobile Menu */
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.contains("is-open");

    setMenuState(!isOpen);
  });

  /* Close Menu After Clicking Navigation Link */
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
      setDropdownState(false);
    });
  });

  /* Close Menu When Clicking Outside */
  document.addEventListener("click", (event) => {
    if (
      navigation.classList.contains("is-open") &&
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenuState(false);
    }
  });

  /* Close Menu With Escape Key */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigation.classList.contains("is-open")) {
      setMenuState(false);
      menuToggle.focus();
    }
  });

  /* Reset Menu When Switching Between Screen Sizes */
  mobileBreakpoint.addEventListener("change", () => {
    setMenuState(false);
    setDropdownState(false);
  });

  setMenuState(false);

  /* ==================================================
     MOBILE NAVIGATION ENDED
  ================================================== */
});

/* ==================================================
   GLOBAL HEADER JAVASCRIPT ENDED
================================================== */
