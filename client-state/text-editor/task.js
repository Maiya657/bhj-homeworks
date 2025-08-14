
const editorTextarea = document.querySelector('#editor');

editorTextarea.addEventListener('keyup', event => {
  event.preventDefault();
  localStorage.setItem('editorContent', editorTextarea.value);  
})

const savedValue = localStorage.getItem('editorContent');

if (savedValue) {
  editorTextarea.value = savedValue;
}

const editorBtn = document.querySelector('.editor__btn');

editorBtn.addEventListener('click', event => {
  event.preventDefault();
  localStorage.removeItem('editorContent');
  editorTextarea.value = '';
})