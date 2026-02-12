
const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    fades.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});

// Typing effect
const text = "Entry-Level Professional | Editing & Computer Skills";
let i = 0;
function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();
