(() => {
  const dead = document.getElementById("dead");
  const lost = document.getElementById("lost");

  getHole = index => document.getElementById(`hole${index}`);

  let deadCount = parseInt(dead.textContent);
  let lostCount = parseInt(lost.textContent);

  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.onclick = () => {
      if(hole.className === 'hole hole_has-mole') {
        deadCount++; 
      } else {
        lostCount++;
      }

      if(lostCount === 5) {
        alert("Вы проиграли!");
        deadCount = 0;
        lostCount = 0;
      }

      if(deadCount === 10) {
        alert("Победа!");
        deadCount = 0;
        lostCount = 0;
      }

      lost.textContent = lostCount;
      dead.textContent = deadCount;
    };
  }

})()