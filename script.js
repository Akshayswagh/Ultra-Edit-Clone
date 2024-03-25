const mobiel_nav = document.querySelector(".mobile-nav-menu");
const nav_header = document.querySelector(".header");

const toggleNavbar = () =>{
    nav_header.classList.toggle("active");
}
mobiel_nav.addEventListener('click', () => toggleNavbar());