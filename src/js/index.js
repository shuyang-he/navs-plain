(function () {
  "use strict";

  function handleMobileNavWrapper() {
    document
      .querySelector(".nav-items-wrapper-mobile")
      .classList.toggle("nav-items-wrapper-mobile--active");
  }

  function handleMobileNav(ele) {
    const nav = ele.querySelector(".mobile-product-nav");
    if (nav) {
      nav.classList.toggle("mobile-product-nav--active");
    }
  }

  function handleMobileSubMenu(ele) {
    const submenu = ele.querySelector(".mobile-product-submenu");
    if (submenu) {
      submenu.classList.toggle("mobile-product-submenu--active");
    }
  }

  function handleDesktopSubMenu(ele) {
    const submenu = ele.querySelector(".nav-dropdown");
    if (submenu) {
      submenu.classList.toggle("nav-dropdown--active");
    }
  }

  function handleDesktopLang(ele) {
    const lang = ele.querySelector(".lang-list");
    if (lang) {
      lang.classList.toggle("lang-list--active");
    }
  }

  document.querySelector(".menu-button").addEventListener(
    "click",
    () => {
      handleMobileNavWrapper();
    },
    false
  );

  const mobileProductMenu = document.querySelectorAll(".mobile-product-menu");
  for (let ele of mobileProductMenu) {
    ele.addEventListener(
      "click",
      () => {
        handleMobileNav(ele);
        handleMobileSubMenu(ele);
      },
      false
    );
  }

  const desktopProductMenu = document.querySelectorAll(".w-dropdown");
  for (let ele of desktopProductMenu) {
    ele.addEventListener(
      "click",
      () => {
        handleDesktopSubMenu(ele);
      },
      false
    );
  }

  const langDrop = document.querySelector(".lang-dropdown");
  langDrop.addEventListener(
    "click",
    () => {
      handleDesktopLang(langDrop);
    },
    false
  );
})();
