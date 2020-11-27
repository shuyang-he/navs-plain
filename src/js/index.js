(function () {
  "use strict";

  function handleNavWrapper() {
    document
      .querySelector(".nav-items-wrapper-mobile")
      .classList.toggle("nav-items-wrapper-mobile--active");
  }

  function handleNav(ele) {
    const nav = ele.querySelector(".mobile-product-nav");
    if (nav) {
      nav.classList.toggle("mobile-product-nav--active");
    }
  }

  function handleSubMenu(ele) {
    const submenu = ele.querySelector(".mobile-product-submenu");
    if (submenu) {
      submenu.classList.toggle("mobile-product-submenu--active");
    }
  }

  document.querySelector(".menu-button").addEventListener(
    "click",
    () => {
      handleNavWrapper();
    },
    false
  );

  const mobileProductMenu = document.querySelectorAll(".mobile-product-menu");
  for (let ele of mobileProductMenu) {
    ele.addEventListener(
      "click",
      () => {
        handleNav(ele);
        handleSubMenu(ele);
      },
      false
    );
  }
})();
