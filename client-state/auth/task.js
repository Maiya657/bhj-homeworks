const formSignin = document.querySelector('#signin__form');
const welcome = document.querySelector('#welcome');
const userIdElement = document.querySelector('#user_id');
const signin = document.querySelector('#signin');
const logout = document.querySelector('#logout');
const url = 'https://students.netoservices.ru/nestjs-backend/auth';

const authorisation = (userId) => {
  welcome.classList.add('welcome_active');
  userIdElement.textContent = userId;
  signin.classList.remove('signin_active');
}

formSignin.addEventListener('submit', event => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  
  const formData = new FormData(formSignin);
  xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.response.success) {
        authorisation(xhr.response.user_id);
        localStorage.setItem('userId', xhr.response.user_id);
      } else {
        alert('Неверный логин/пароль');
        formSignin.reset();
      }
    }
  })
  xhr.open('POST', url);
  xhr.responseType = 'json';
  xhr.send(formData);
})

logout.addEventListener('click', event => {
  event.preventDefault();
  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
  localStorage.removeItem('userId');
})

window.addEventListener('load', () => {
  const userIdLocal = localStorage.getItem('userId');
  if (userIdLocal) {
    authorisation(userIdLocal);
  }
})