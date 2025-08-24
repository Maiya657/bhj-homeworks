
const editorTextarea = document.querySelector('#editor');

editorTextarea.addEventListener('keyup', event => {
  event.preventDefault();
  localStorage.setItem('editorContent', editorTextarea.value);  
})

editorTextarea.value = localStorage.getItem('editorContent');

const editorBtn = document.querySelector('.editor__btn');

editorBtn.addEventListener('click', event => {
  event.preventDefault();
  localStorage.removeItem('editorContent');
  editorTextarea.value = '';
})