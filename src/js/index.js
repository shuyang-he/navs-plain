(function () {
  "use strict";

  function handleMenu() {
    document.querySelector(".menu").classList.toggle("menu--active");
  }

  function handleNav() {
    document
      .querySelector(".pagehead__drop")
      .classList.toggle("pagehead__drop--active");
  }

  function handleNavBanner() {
    document
      .querySelector(".nav-banner")
      .classList.toggle("nav-banner--active");
  }

  function handleSubMenu() {
    document.querySelectorAll("submenu");
  }

  document.querySelector(".menu").addEventListener(
    "click",
    () => {
      handleMenu();
      handleNav();
      handleNavBanner();
    },
    false
  );

  document.querySelector(".nav-banner").addEventListener(
    "click",
    () => {
      handleMenu();
      handleNav();
      handleNavBanner();
    },
    false
  );

  const pagehead__drop = document.querySelectorAll(".pagehead__drop > li");
  for (let li of pagehead__drop) {
    li.addEventListener(
      "mouseenter",
      () => {
        const submenu = li.querySelector(".submenu");
        if (submenu) {
          submenu.classList.toggle("submenu--active");
        }
      },
      false
    );
    li.addEventListener(
      "mouseleave",
      () => {
        const submenu = li.querySelector(".submenu");
        if (submenu) {
          submenu.classList.toggle("submenu--active");
        }
      },
      false
    );
  }
})();
