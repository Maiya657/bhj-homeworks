function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p.startsWith(name + '='));
  return cookie ? cookie.substring(name.length + 1) : undefined;
}

const cookiePopupClosed = getCookie('popupClosed');
if (!cookiePopupClosed) {
  document.querySelector('#subscribe-modal').classList.add('modal_active');
}

document.querySelector('.modal__close').addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('.modal_active').classList.remove('modal_active');
  setCookie('popupClosed', 1);
})