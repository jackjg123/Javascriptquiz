function printHighScores() {
  // either get scores from localstorage or set to empty array
  var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];

  // sort highScores by score property in descending order HINT: the sort method.

  for (var i = 0; i < highScores.length; i += 1) {
    // create li tag for each high score
    var liTag = document.createElement('bestScores');
    liTag.textContent = highScores[i].initials + ' - ' + highScores[i].score;

    // display on page
    var olEl = document.getElementById('bestScores');
    olEl.appendChild(bestScores[i]);
  }
}

function clearHighScores() {
  window.localStorage.removeItem('');
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighScores;

// run function when page loads
printHighScores();
