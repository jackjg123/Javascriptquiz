function printHighScores() {
  var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];

  // Sort highscores by score property in descending order
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  for (var i = 0; i < highScores.length; i++) {
    var olEl = document.getElementById('highScores');
    var liTag = document.createElement('li');
    liTag.textContent = highScores[i].initials + ' - ' + highScores[i].score;
    olEl.appendChild(liTag);
  }
}

function clearHighScores() {
  window.localStorage.removeItem('highScores');
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighScores;

// Run function when page loads
printHighScores();
