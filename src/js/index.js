(function () {
  "use strict";

  // let widthThreshold = false;

  // window.onresize = () => {
  //   if (document.body.clientWidth <= 1300 && widthThreshold) {
  //     document.querySelector(".pagehead").classList.toggle("container");
  //     widthThreshold = !widthThreshold;
  //   }
  //   if (document.body.clientWidth > 1300 && !widthThreshold) {
  //     document.querySelector(".pagehead").classList.toggle("container");
  //     widthThreshold = !widthThreshold;
  //   }
  // };

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
})();
