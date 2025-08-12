const valutes = JSON.parse(localStorage.getItem('localValutes'));
const items = document.querySelector('#items');

const render = (valute) => {
  items.innerHTML = '';
  document.querySelector('.loader_active').classList.remove('loader_active');
  Object.keys(valute).forEach(currency => {
    const currencyData = valute[currency];
    items.insertAdjacentHTML('afterbegin', `
      <div class="item">
        <div class="item__code">
          ${currency}
        </div>
        <div class="item__value">
          ${currencyData.Value}
        </div>
        <div class="item__currency">
          руб.
        </div>
      </div>
    `)
  })
}

if (valutes) {
  render(valutes);
} else {
  const xhr = new XMLHttpRequest();
  const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
  xhr.open('GET', url);
  xhr.addEventListener('readystatechange', event => {
    if (xhr.readyState === xhr.DONE) {
      const response = JSON.parse(xhr.responseText);
      render(response.response.Valute);
      localStorage.setItem('localValutes', JSON.stringify(response.response.Valute));
    }
  });
  xhr.send();
}
