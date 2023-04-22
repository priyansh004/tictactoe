
var cells = document.querySelectorAll("td");
var currentPlayer = "X";

cells.forEach(function(cell) {
  cell.addEventListener("click", function() {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      checkForWinner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function checkForWinner() {
  var winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  winningCombos.forEach(function(combo) {
    var cell1 = cells[combo[0]].textContent;
    var cell2 = cells[combo[1]].textContent;
    var cell3 = cells[combo[2]].textContent;
    if (cell1 && cell1 === cell2 && cell2 === cell3) {
      alert(cell1 + " wins!");
      resetGame();
    }
  });

  var isTie = true;
  cells.forEach(function(cell) {
    if (!cell.textContent) {
      isTie = false;
    }
  });
  if (isTie) {
    alert("It's a tie!");
    resetGame();
  }
}

function resetGame() {
  cells.forEach(function(cell) {
    cell.textContent = "";
  });
  currentPlayer = "X";
}