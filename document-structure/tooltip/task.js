(function () {
  const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
  
  hasTooltips.forEach(hasTooltip => {
    const div = document.createElement('div');
    div.classList.add('tooltip');
    div.innerText =  hasTooltip.title;
    hasTooltip.insertAdjacentElement('afterEnd', div);

    hasTooltip.addEventListener('click', event => {
      event.preventDefault();
      Array.from(document.querySelectorAll('.tooltip_active')).forEach(activeTooltip => {
        if (div !== activeTooltip) {
          activeTooltip.classList.remove('tooltip_active');
        }
      });
      div.classList.toggle('tooltip_active');
      
      if(hasTooltip.dataset.position === 'right') {
        div.style.left = hasTooltip.offsetLeft + hasTooltip.offsetWidth + 'px';
        div.style.top = hasTooltip.offsetTop + 'px';
      } else if(hasTooltip.dataset.position === 'top') {
        div.style.left = hasTooltip.offsetLeft + 'px';
        div.style.top = hasTooltip.offsetTop - div.offsetHeight + 'px';
      } else if(hasTooltip.dataset.position === 'left') {
        div.style.left = hasTooltip.offsetLeft - div.offsetWidth + 'px';
        div.style.top = hasTooltip.offsetTop + 'px';
      } else {
        div.style.left = hasTooltip.offsetLeft + 'px';
        div.style.top = hasTooltip.offsetTop + hasTooltip.offsetHeight + 'px';
      }
    })
  })
  
})()