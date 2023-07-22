import EventManager from "./EventManager.js";

class Navbar {
  constructor() {
    this.navTogglers = document.querySelectorAll("[data-nav-toggler]");
    this.navbar = document.querySelector("[data-navbar]");
    this.navbarLinks = document.querySelectorAll("[data-nav-link]");
    this.overlay = document.querySelector("[data-overlay]");

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);

    this.addEventListeners();
  }

  toggleNavbar() {
    this.navbar.classList.toggle("active");
    this.overlay.classList.toggle("active");
  }

  closeNavbar() {
    this.navbar.classList.remove("active");
    this.overlay.classList.remove("active");
  }

  addEventListeners() {
    const eventManager = new EventManager();

    eventManager.addEventOnElement(
      this.navTogglers,
      "click",
      this.toggleNavbar
    );
    eventManager.addEventOnElement(this.navbarLinks, "click", this.closeNavbar);
  }
}

export default Navbar;
