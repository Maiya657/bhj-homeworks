let timerInterval;

const timer = document.getElementById("timer");
let timerSeconds = parseInt(timer.textContent);

const decreaseTimer = function() {
  timerSeconds--;
  const time = new Date(timerSeconds*1000).toISOString().substring(11, 19);
  timer.textContent = time;

  if(timerSeconds == 0) {
    alert(`Вы победили в конкурсе!`);
    const click = document.getElementById("click");
    click.click();
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }
}

const time = new Date(timerSeconds*1000).toISOString().substring(11, 19);
timer.textContent = time;
  
timerInterval = setInterval(decreaseTimer, 1000);
