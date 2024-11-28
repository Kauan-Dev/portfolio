const scrollRevealOptions = {
    duration: 800,
    distance: '50px',
    easing: 'ease-in-out',
    viewFactor: window.innerWidth <= 1024 ? 0.2 : 0.5,
};

const animations = [
    { selector: '.top', origin: 'top', duration: 800, distance: '50px'},
    { selector: '.right', origin: 'right', duration: 1000, distance: '50px' },
    { selector: '.bottom', origin: 'bottom', duration: 800, distance: '50px' },
    { selector: '.left', origin: 'left', duration: 1000, distance: '50px' },
    { selector: '.top-1000', origin: 'top', duration: 1000, distance: '10px' },
    { selector: '.top-1400', origin: 'top', duration: 1400, distance: '10px' },
    { selector: '.top-1800', origin: 'top', duration: 1800, distance: '10px' },
];

animations.forEach(({ selector, origin, duration, distance}) => {
    ScrollReveal().reveal(selector, {
        ...scrollRevealOptions,
        origin,
        duration,
        distance,
    });
});

//---------------- SCROLL DOWN ----------------\\

const minhaDiv = document.getElementById("scroll-down");

window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
        // Remove a classe "hide" quando o scroll está no topo
        minhaDiv.classList.remove("hide");
    } else {
        // Adiciona a classe "hide" quando o usuário rola para baixo
        minhaDiv.classList.add("hide");
    }
});