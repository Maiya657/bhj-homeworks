(function(){
  const sizeButtons = Array.from(document.querySelectorAll('.font-size'));
  const fontColorButtons = Array.from(document.querySelectorAll('.book__control_color .color'));
  const bgColorButtons = Array.from(document.querySelectorAll('.book__control_background .color'));
  const book = document.getElementById('book');

  sizeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector('.font-size_active').classList.remove('font-size_active');
      button.classList.add('font-size_active');

      const size = button.dataset.size;
      
      book.classList.remove('book_fs-big', 'book_fs-small');
      if (book !== undefined) {
        book.classList.add(`book_fs-${size}`);      
      }
    })
  })
  
  fontColorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector('.book__control_color .color_active').classList.remove('color_active');
      button.classList.add('color_active');

      const color = button.dataset.textColor;
      
      book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
      book.classList.add(`book_color-${color}`);
    })
  })

  bgColorButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      document.querySelector('.book__control_background .color_active').classList.remove('color_active');
      button.classList.add('color_active');

      const bgColor = button.dataset.bgColor;
      
      book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');
      book.classList.add(`bg_color_${bgColor}`);
    })
  })
  

})();