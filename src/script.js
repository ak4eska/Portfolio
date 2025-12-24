const span = document.getElementById("typedtext");
const words = ["Mystic ", "Adven"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const visibleText = currentWord.substring(0, charIndex);

    span.textContent = visibleText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 200);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);