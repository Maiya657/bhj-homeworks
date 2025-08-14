const formSignin = document.querySelector('#signin__form');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
const signin = document.querySelector('#signin');
const logout = document.querySelector('#logout');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/auth';

formSignin.addEventListener('submit', event => {
  event.preventDefault();
  
  const formData = new FormData(formSignin);
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      const resp = JSON.parse(xhr.responseText);
      if (resp.success) {
        welcome.classList.add('welcome_active');
        userId.textContent = resp.user_id;
        signin.classList.remove('signin_active');
      } else {
        alert('Неверный логин/пароль');
        formSignin.reset();
      }
    }
  })
  xhr.open('POST', url);
  xhr.send(formData);
})

logout.addEventListener('click', event => {
  event.preventDefault();
  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
})