function printHighscores() {

  var highscores = JSON.parse(window.localStorage.getItem("")) || [];

  for (var i = 0; i < highscores.length; i += 1) {
    var liTag = document.createElement("");
    liTag.textContent = highscores[i].name + ": " + highscores[i].score;

    var olEl = document.getElementById("");
    olEl.appendChild(liTag);
  }
}

function clearHighscores() {
  window.localStorage.removeItem();
  window.location.reload();
}

document.getElementById("clear").onclick = clearHighscores;

printHighscores();