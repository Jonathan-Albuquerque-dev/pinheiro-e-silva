lucide.createIcons();

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileOverlay = document.getElementById("mobile-menu-overlay");
const sideMenu = document.getElementById("side-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

function openMenu() {
  mobileOverlay.classList.add("active");
  sideMenu.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileOverlay.classList.remove("active");
  sideMenu.classList.remove("active");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", (e) => {
  if (e.target === mobileOverlay) closeMenu();
});
mobileNavLinks.forEach((link) => link.addEventListener("click", closeMenu));
