let menuToggler = document.querySelector(".menu-toggle");
let body = document.querySelector("body");

menuToggler.addEventListener('click', function(){
    body.classList.toggle("open");
});


// Scroll Reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal(".animate-right", {
    origin: "right",
    duration: 1000,
    distance: "25rem",
    delay: 600
});