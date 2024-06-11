const mobileMenu = document.querySelector("nav .mobile-menu");
const mobileClose = document.querySelector("nav .mobile-close");
const mobileNavigation = document.querySelector(".mobile-navigation");
const mobileNavLiAll = document.querySelectorAll("nav.mobile-navigation ul li");
const socialIcons = document.querySelectorAll(".social-icons a img");
const desktopNavLiAll = document.querySelectorAll("nav ul li")

mobileMenu.addEventListener("click", () => {
    mobileNavigation.classList.add("active");
    mobileClose.classList.add("active"); 
})

mobileClose.addEventListener("click", () => {
    mobileNavigation.classList.remove("active");
    mobileClose.classList.remove("active"); 
})

mobileNavLiAll.forEach((li, i) => {
    li.style.animationDelay = 400 + i * 140 + "ms";
})

socialIcons.forEach((li, i) => {
    li.style.animationDelay = 1400 + i * 120 + "ms";
})

desktopNavLiAll.forEach((li, i) => {
    li.style.animationDelay = 2000 + i * 140 + "ms";
})
