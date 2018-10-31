let computerChoice = "Rock"

function play(playerChoice) {
  var playerChoiceElem = document.getElementById("pchoice")
  var computerChoiceElem = document.getElementById("cchoice")
  var results = document.getElementById("results")
  computerChoiceElem.innerText = computerChoice
  playerChoiceElem.innerText = playerChoice
  if (playerChoice == "Paper") {
    if (computerChoice == "Rock") {
      results.innerText = "Player Win"

    }
  }
  if (playerChoice == "Scissors") {
    if (computerChoice == "Rock") {
      results.innerText = "Computer Win"
    }
  }
  if (playerChoice == "Rock") {
    if (computerChoice == "Scissors") {
      results.innerText = "Player Win"
    }
  }
  if (computerChoice == "Paper") {
    if (playerChoice == "Scissors") {
      results.innerText = "Player Win"
    }
  }
  if (computerChoice == "Rock") {
    if (playerChoice == "Rock") {
      results.innerText = "Tie"
    }
  }
}
