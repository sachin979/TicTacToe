var winningArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
  [1, 4, 7],
  [3, 6, 9],
];

var players = ["X", "O"];
var current_player = "X";
var current_player_txt = document.querySelector(".current__player");
var input_array = ["", "", "", "", "", "", "", "", ""];
var won = false;
document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
current_player_txt.innerHTML = current_player + "'s Turn";
document.querySelector(".new__game").addEventListener("click", () => {
  input_array = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.innerHTML = "";
  });
  current_player_txt.innerHTML = current_player + "'s Turn";
  won = false;
});

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const id = clickedCell.getAttribute("cell-id");

  if (!input_array[id - 1] && !won) {
    input_array[id - 1] = current_player;
    clickedCell.innerHTML = current_player;
    if (checkWinner()) {
      current_player_txt.innerHTML = current_player + " Won";
      party.confetti(document.querySelector(".new__game"), {
        spread: 40,
        count: 60,
      });
      current_player = "X";
      won = true;
      return;
    }
    if (current_player == "X") {
      current_player = "Y";
    } else {
      current_player = "X";
    }
    current_player_txt.innerHTML = current_player + "'s Turn";
  } else {
    return;
  }
}

function checkWinner() {
  let flag = false;
  winningArray.forEach((arr) => {
    if (
      input_array[arr[0] - 1] === current_player &&
      input_array[arr[1] - 1] === current_player &&
      input_array[arr[2] - 1] === current_player
    ) {
      flag = true;
    }
  });
  if (flag) {
    return true;
  }
  return false;
}
