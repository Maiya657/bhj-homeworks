const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const cookieWidth = cookie.width;
const speed = document.getElementById("speed__counter");
let lastClickTime = new Date();
let clicks = parseInt(clicker.textContent);

cookie.onclick = () => {
    clicks++;
    clicker.textContent = clicks;
    changeSizes(clicks % 2);

    const newClickTime = new Date();
    const clickDuration = newClickTime - lastClickTime;
    lastClickTime = newClickTime;
    speed.textContent = (1 / clickDuration * 1000).toFixed(2);
}

function changeSizes(odd) {
  if(odd) {
    cookie.width = cookieWidth * 0.95;
  } else {
    cookie.width = cookieWidth;
  }
}