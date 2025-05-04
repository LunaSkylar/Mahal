function flipCard(card) {
    card.classList.toggle("flipped");
  }
  
  document.getElementById("playBtn").addEventListener("click", function () {
    const music = document.getElementById("bgMusic");
    music.play();
    this.style.display = 'none'; // Hide button after starting music
  });
  