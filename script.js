/*---------------------------Typed Text Animation---------------------------*/
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Software Developer", "Manual Tester", "Web Developer", "Freelancer"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});


/*---------------------------ScrollReveal Animations---------------------------*/
ScrollReveal().reveal('.header', {
    duration: 1500,
    origin: 'top',
    distance: '50px'
});

ScrollReveal().reveal('.FirstElement', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    delay: 300
});

ScrollReveal().reveal('.about-area', {
    duration: 1500,
    origin: 'left',
    distance: '50px',
    delay: 300
});

ScrollReveal().reveal('.education-content', {
    duration: 1500,
    origin: 'right',
    distance: '50px',
    delay: 300
});

ScrollReveal().reveal('.skills-content', {
    duration: 1500,
    origin: 'bottom',
    distance: '50px',
    delay: 300
});
