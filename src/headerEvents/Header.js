import EventManager from "./EventManager.js";

class Header {
  constructor() {
    this.header = document.querySelector("[data-header]");
    this.backTopBtn = document.querySelector("[data-back-top-btn]");
    this.filtersContainer = document.querySelector(".filters-container");
    this.lastScrolledPos = 0;

    this.headerActive = this.headerActive.bind(this);
    this.backToTop = this.backToTop.bind(this);

    this.addEventListeners();
  }

  headerActive() {
    const navHeight = this.header.getBoundingClientRect().height;

    if (window.pageYOffset > navHeight) {
      if (window.pageYOffset < this.lastScrolledPos) {
        this.header.classList.remove("scrolled-down");
        this.header.classList.add("scrolled-up");
        this.filtersContainer.classList.remove("inactive");
        this.filtersContainer.classList.add("active");
      } else {
        this.header.classList.remove("scrolled-up");
        this.header.classList.add("scrolled-down");
        this.filtersContainer.classList.remove("active");
        this.filtersContainer.classList.add("inactive");
      }

      this.lastScrolledPos = window.pageYOffset;
    } else {
      this.header.classList.remove("scrolled-up");
      // this.filtersContainer.classList.remove("active");
    }
  }

  backToTop() {
    if (window.pageYOffset > 500) {
      this.backTopBtn.classList.add("active");
    } else {
      this.backTopBtn.classList.remove("active");
    }
  }

  addEventListeners() {
    const eventManager = new EventManager();

    eventManager.addEventOnElement(window, "scroll", this.headerActive);
    eventManager.addEventOnElement(window, "scroll", this.backToTop);
  }
}

export default Header;
