// Fade reveal
const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    fades.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            section.classList.add('show');
        }
    });

    // Progress animation
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const top = bar.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            bar.style.width = bar.getAttribute('data-width');
        }
    });
});
