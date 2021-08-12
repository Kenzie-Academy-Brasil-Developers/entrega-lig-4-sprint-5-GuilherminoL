const validateVictory = () => {
  rowCompare();
  columnCompare();
  transverseCompare();
};

const rowCompare = () => {
  let countPlayerColumn = 0;
  let countComputerColumn = 0;

  for (let i = 0; i < game.length; i++) {
    countPlayerColumn = 0;
    countComputerColumn = 0;

    for (let j = 0; j < game[i].length; j++) {
      let currentPosition = game[i][j];

      if (currentPosition === 1) {
        countPlayerColumn++;
        if (countPlayerColumn === 4) {
          isWinner();
        }
      } else {
        countPlayerColumn = 0;
      }

      if (currentPosition === 2) {
        countComputerColumn++;
        if (countComputerColumn === 4) {
          isWinner();
        }
      } else {
        countComputerColumn = 0;
      }
    }
  }
};

const columnCompare = () => {
  let countPlayerRow = 0;
  let countComputerRow = 0;

  for (let i = 0; i < 5; i++) {
    countPlayerRow = 0;
    countComputerRow = 0;

    for (let j = 0; j < 6; j++) {
      let currentPosition = game[j][i];

      if (currentPosition === 1) {
        countPlayerRow++;
        if (countPlayerRow === 4) {
          isWinner();
        }
      } else {
        countPlayerRow = 0;
      }

      if (currentPosition === 2) {
        countComputerRow++;
        if (countComputerRow === 4) {
          isWinner();
        }
      } else {
        countComputerRow = 0;
      }
    }
  }
};

const transverseCompare = () => {
  let countUpwards = 0;
  let countDownwards = 0;

  for (let i = 0; i <= 5; i++) {
    countUpwards = 0;
    countDownwards = 0;

    for (let j = 0; j <= 6; j++) {
      let currentPosition = game[i][j];

      if (currentPosition !== 0) {
        if (
          currentPosition === game[i + 1][j + 1] &&
          currentPosition === game[i + 2][j + 2] &&
          currentPosition === game[i + 3][j + 3]
        ) {
          isWinner();
        }

        if (
          currentPosition === game[i + 1][j - 1] &&
          currentPosition === game[i + 2][j - 2] &&
          currentPosition === game[i + 3][j - 3]
        ) {
          isWinner();
        }
      }
    }
  }
};

const isWinner = () => {
  let winner = currentPosition.id;
  return `The winner is: ${winner}!!`;
};
