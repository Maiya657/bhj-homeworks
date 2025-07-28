const rotators = Array.from(document.querySelectorAll('.rotator'));

const next = (rotator, rotatorCases) => {
  const rotatorActive = rotator.querySelector('.rotator__case_active');

  rotatorActive.classList.remove('rotator__case_active');
  const newCase = rotatorCases[Math.floor(Math.random() * rotatorCases.length - 1) + 1];
  newCase.classList.add('rotator__case_active');
  newCase.style.color = newCase.dataset.color;

  setTimeout(() => {
    next(rotator, rotatorCases);
  }, newCase.dataset.speed);
}

rotators.forEach((rotator) => {
  const rotatorCases = Array.from(rotator.querySelectorAll('.rotator__case'));

  next(rotator, rotatorCases);
})
