(function () {
  "use strict";

  // handle search input.
  function handleSearchFocus() {
    document
      .querySelector("#ember14")
      .classList.toggle("search-global-typeahead--focused");
  }

  function handleSearchOverlay() {
    document
      .querySelector(".search-box__overlay")
      .classList.toggle("search-box__overlay--active");
  }

  // handle navigation links.
  function clearNavPrimaryLinkActive(list) {
    for (let ele of list) {
      ele.classList.remove("global-nav__primary-link--active");
    }
  }

  function handleNavPrimaryLink(ele) {
    ele.classList.toggle("global-nav__primary-link--active");
  }

  function svgRemoveActive(ele) {
    let url = ele.href.baseVal;
    const index = url.search("--active");
    if (index !== -1) {
      const newUrl = url.substring(0, index);
      ele.href.baseVal = newUrl;
    }
  }

  function clearNavPrimaryItemSvgActive(list) {
    for (let ele of list) {
      svgRemoveActive(ele);
    }
  }

  function svgToggle(ele) {
    let url = ele.href.baseVal;
    const index = url.search("--active");
    if (index === -1) {
      url += "--active";
      ele.href.baseVal = url;
    } else {
      const newUrl = url.substring(0, index);
      ele.href.baseVal = newUrl;
    }
  }

  function handleNavPrimaryItemSvg(ele) {
    svgToggle(ele);
  }

  // handle work link side panel.
  function handleArtDecoModalOverlay() {
    document
      .querySelector(".artdeco-modal-overlay")
      .classList.toggle("artdeco-modal-overlay--active");
  }

  function handleArtDecoModalSidePanel() {
    document.querySelector("body").classList.toggle("artdeco-model-is-open");
    document.querySelector("body").classList.toggle("side-panel-is-open");
  }

  function handleArtDecoModalOutlet() {
    if (
      document
        .querySelector(".artdeco-modal-overlay")
        .classList.contains("artdeco-modal-overlay--active")
    ) {
      // close
      handleArtDecoModalSidePanel();
      setTimeout(() => {
        handleArtDecoModalOverlay();
      }, 300);
    } else {
      // open
      handleArtDecoModalOverlay();
      setTimeout(() => {
        handleArtDecoModalSidePanel();
      }, 0);
    }
  }

  // register event operations.
  document.querySelector(".search-global-typeahead__input").addEventListener(
    "focus",
    () => {
      handleSearchFocus();
      handleSearchOverlay();
    },
    false
  );

  document.querySelector(".search-box__overlay").addEventListener(
    "click",
    () => {
      handleSearchFocus();
      handleSearchOverlay();
    },
    false
  );

  const globalNavPrimaryLink = document.querySelectorAll(
    ".global-nav__primary-link"
  );
  const globalNavIconPath = document.querySelectorAll(".global-nav__icon-path");
  for (let i = 0; i < globalNavPrimaryLink.length; i++) {
    globalNavPrimaryLink[i].addEventListener(
      "click",
      () => {
        clearNavPrimaryLinkActive(globalNavPrimaryLink);
        if (i < 5) {
          handleNavPrimaryLink(globalNavPrimaryLink[i]);
        }
        clearNavPrimaryItemSvgActive(globalNavIconPath);
        if (i < 5) {
          handleNavPrimaryItemSvg(
            globalNavPrimaryLink[i].querySelector(".global-nav__icon-path")
          );
        }
      },
      false
    );
  }

  document
    .querySelectorAll("button.global-nav__primary-link")[1]
    .addEventListener(
      "click",
      () => {
        handleArtDecoModalOutlet();
      },
      false
    );

  document.querySelector(".artdeco-modal-overlay").addEventListener(
    "click",
    () => {
      handleArtDecoModalOutlet();
    },
    false
  );
})();
