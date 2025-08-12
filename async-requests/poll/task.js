const render = (data) => {
  document.querySelector('.poll__title').textContent = data.data.title;
  
  const pollAnswers = document.querySelector('.poll__answers');
  data.data.answers.forEach(answer => {
    pollAnswers.insertAdjacentHTML('afterbegin', `
    <button class="poll__answer">
      ${answer}
    </button>
    `);
  });

  const pollAnswersBtns = Array.from(document.querySelectorAll('.poll__answer'));
  pollAnswersBtns.forEach(pollAnswersBtn => {
    pollAnswersBtn.addEventListener('click', event => {
      event.preventDefault();
      alert('Спасибо, ваш голос засчитан!');
    })
  })  
}

const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';
xhr.open('GET', url);
xhr.addEventListener('readystatechange', event => {
  if (xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText);
    render(response);
  }
});
xhr.send();