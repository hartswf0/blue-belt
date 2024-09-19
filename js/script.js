// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate Burger
    burger.classList.toggle('toggle');
});

// Scroll Reveal Effect
const revealOnScroll = () => {
    const elements = document.querySelectorAll('.hero-image, .hero-text, .project-item, .manifesto-section, .research-list li, .team-member');

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;

        if(elementTop < windowHeight - elementVisible){
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
