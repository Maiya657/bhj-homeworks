const reveals = Array.from(document.querySelectorAll('.reveal'));

const isVisible = (element) => {
  const {top, bottom} = element.getBoundingClientRect();

  return !(bottom < 0 || top > window.innerHeight);
} 

document.addEventListener('scroll', () => {
  reveals.forEach((reveal) => {
    if (isVisible(reveal)) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  })
})