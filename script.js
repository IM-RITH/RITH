/* to scroll to the page */
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0)
});


/* to click the menu */
let menu = document.querySelector('#fa-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-solid-x');
    navbar.classList.toggle('active');
}