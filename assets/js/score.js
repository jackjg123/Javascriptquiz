//Prints High scores
function printHighScores() {
  //Retrieves the high scores from local storage
  var highScores = JSON.parse(window.localStorage.getItem('highScores')) || [];

  //Sorts high scores from best to least
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  //Loop through the high scores and prints them on the page.
  for (var i = 0; i < highScores.length; i++) {
    var olEl = document.getElementById('highScores');
    var liTag = document.createElement('li');
    liTag.textContent = highScores[i].initials + ' - ' + highScores[i].score;
    olEl.appendChild(liTag);
  }
}

//Clears high scores
function clearHighScores() {
  window.localStorage.removeItem('highScores');
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighScores;

printHighScores();
