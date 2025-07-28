const reveal = document.querySelector('.reveal');

const isVisible = () => {
  const {top, bottom} = reveal.getBoundingClientRect();

  return !(bottom < 0 || top > window.innerHeight);
} 

document.addEventListener('scroll', () => {
  if (isVisible()) {
    reveal.classList.add('reveal_active');
  } else {
    reveal.classList.remove('reveal_active');
  }
})