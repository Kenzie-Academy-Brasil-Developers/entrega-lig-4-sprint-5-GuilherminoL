// função que válida a condição de vitória
const validateVictory = () => {
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      currentPosition = game[i][j];
      rowCompare();
      columnCompare();
      transverseCompare();
    }
  }
};

// função de comparação horizontal
const rowCompare = () => {
  let countNextRow = 0;
  let countPreviousRow = 0;

  for (let i = 0; i < 7; i++) {
    let nextRowPosition = currentPosition[i][j + 1];
    let previousRowPosition = currentPosition[i][j - 1];

    if (currentPosition === nextRowPosition) {
      countNextRow++;
      if (countNextRow === 4) {
        isWinner();
      }
    }

    if (currentPosition === previousRowPosition) {
      countPreviousRow++;
      if (countPreviousRow === 4) {
        isWinner();
      }
    }
  }
};

// função de comparação vertical
const columnCompare = () => {
  let countNextColumn = 0;
  let countPreviousColumn = 0;

  for (let i = 0; i < 4; i++) {
    let nextColumnPosition = currentPosition[i + 1][j];
    let previousColumnPosition = currentPosition[i - 1][j];

    if (currentPosition === nextColumnPosition) {
      countNextColumn++;
      if (countNextColumn === 4) {
        isWinner();
      }
    }

    if (currentPosition === previousColumnPosition) {
      countPreviousColumn++;
      if (countPreviousColumn === 4) {
        isWinner();
      }
    }
  }
};

// função de comparação transversal
const transverseCompare = () => {
  let countUpperRight = 0;
  let countUpperLeft = 0;
  let countLowerRight = 0;
  let countLowerLeft = 0;

  for (let i = 0; i < 6; i++) {
    let upperRightPosition = currentPosition[i + 1][j + 1];
    let upperLeftPosition = currentPosition[i + 1][j - 1];
    let lowerRightPosition = currentPosition[i - 1][j + 1];
    let lowerLeftPosition = currentPosition[i - 1][j - 1];

    if (currentPosition === upperRightPosition) {
      countUpperRight++;
      if (countUpperRight === 4) {
        isWinner();
      }
    }

    if (currentPosition === upperLeftPosition) {
      countUpperLeft++;
      if (countUpperLeft === 4) {
        isWinner();
      }
    }

    if (currentPosition === lowerRightPosition) {
      countLowerRight++;
      if (countLowerRight === 4) {
        isWinner();
      }
    }

    if (currentPosition === lowerLeftPosition) {
      countLowerLeft++;
      if (countLowerLeft) {
        isWinner();
      }
    }
  }
};

// função que retorna o nome do vencedor
const isWinner = () => {
  let winner = currentPosition.id;
  return `The winner is: ${winner}!!`;
};
