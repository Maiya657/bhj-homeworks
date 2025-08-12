const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/upload';
const form = document.querySelector('#form');
const progress = document.querySelector('#progress');


form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  xhr.open('POST', url);
  xhr.upload.addEventListener('progress', event => {
    progress.value = event.loaded / event.total;
  })
  xhr.upload.addEventListener('load', () => {
    alert('Файл полностью загружен!');
    progress.value = 0;
  })
  xhr.send(formData);
})
