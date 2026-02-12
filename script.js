const bars = document.querySelectorAll('.bar');

window.addEventListener('scroll', () => {
  bars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if(top < window.innerHeight - 50){
      bar.style.width = bar.getAttribute('data-width');
    }
  });
});
