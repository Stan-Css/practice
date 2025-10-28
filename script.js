const Hamburger = document.getElementById ("hamburger");
const navLink = document.getElementById ("navLink");

Hamburger.addEventListener ('click', () => {
    navLink.classList.toggle ('active')

    hamburger.classList.toggle ("bi-list");
    hamburger.classList.toggle ("bi-x");
});
