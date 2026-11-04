const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll("#site-nav a");

function closeMenu() {
  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", function () {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
    closeMenu();
    navToggle.focus();
  }
});
