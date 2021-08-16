let currentPlayer = 1;
document.addEventListener(ResizeObserverSize, () =>console.log(document.body.clientWidth))
const validateVictory = (event) => {
  rowCompare()
  columnCompare()
  transverseCompare();
};

const columnCompare = () => {
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
          isWinner(1);
        }
      } else {
        countPlayerColumn = 0;
      }

      if (currentPosition === 2) {
        countComputerColumn++;
        if (countComputerColumn === 4) {
          isWinner(2);
        }
      } else {
        countComputerColumn = 0;
      }
    }
  }
};

const rowCompare = () => {
  let countPlayerRow = 0;
  let countComputerRow = 0;

  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      let currentValue = game[i][j];
      let y = i;
      countPlayerRow = 0;
      countComputerRow = 0;

      while (y <= 6) {
        let nextPosition = game[y][j];
        if (nextPosition === 0) break;
        if (nextPosition === currentValue) {
          y++;
          countComputerRow++;
        } else break;
        if (countComputerRow === 4) {
          isWinner(currentValue);
          break;
        }
      }
    }
  }
};

const transverseCompare = () => {

  for(let i=2; i<game.length-2;i++){
    let row = game[i]
    for(let j=0; j<row.length; j++){
      let cell = row[j]
      if(cell !==0){
        if(cell === game[i+1][j+1] && cell === game[i+2][j+2] && cell === game[i+3][j+3]){
            isWinner(cell)
            
        }if(cell === game[i+1][j-1] && cell === game[i+2][j-2] && cell === game[i+3][j-3]){
            isWinner(cell)
        }if(cell === game[i-1][j+1] && cell === game[i-2][j+2] && cell === game[i-3][j+3]){
            isWinner(cell)
            
        }if(cell === game[i-1][j-1] && cell === game[i-2][j-2] && cell === game[i-3][j-3]){
            isWinner(cell)
        }
      }
     
    }
  }
  
};

const isWinner = (player) => {
  const winMessage = document.getElementsByClassName("victoryPopup")[0];

  if (winMessage.className.includes("startGameAnimation")) {
    winMessage.classList.remove("startGameAnimation");
  }

  const btnPlay = document.createElement("button");
  btnPlay.id = "btn-reset";
  btnPlay.innerText = "Jogar";
  btnPlay.classList.add("btn-reset");
  winMessage.innerText = "Vitória do jogador " + player;
  btnPlay.addEventListener("click", creatingBoard);
  winMessage.appendChild(btnPlay);
  winMessage.classList.remove("hidden");
  winMessage.classList.add("winnerAnimation");

  setTimeout(() => {
    winMessage.classList.remove("winnerAnimation");
  }, 2000);
};

const tiePopup = () => {
  const tieMessage = document.createElement("div");
  tieMessage.id = "tie";
  const tieH1 = document.createElement("h1");
  const tieP = document.createElement("p");
  tieH1.innerText = "Parabéns !!!";
  tieP.innerText = "Vocês fizeram o mais difícil e empataram o jogo...";
  tieMessage.appendChild(tieH1);
  tieMessage.appendChild(tieP);
  tieMessage.classList.add("winnerAnimation");
  const btnPlay = document.createElement("button");
  btnPlay.id = "btn-resetTie";
  btnPlay.innerText = "Jogar";
  btnPlay.classList.add("btn-reset");
  tieMessage.appendChild(btnPlay);
  main.appendChild(tieMessage);

  btnPlay.addEventListener("click", () => {
    tieMessage.classList.add("shadeOutAnimation");
    setTimeout(() => {
      creatingBoard();
    }, 2000);
  });
};

const verifyTie = () => {
  let tie = true;
  game.map((line) => {
    if (line[0] === 0) {
      tie = false;
    }
  });
  if (tie === true) tiePopup();
  return tie;
};

const changePlayer = () => {
  if (currentPlayer === 2) {
    currentPlayer = 1;
    return currentPlayer;
  }
  if (currentPlayer === 1) {
    currentPlayer = 2;
    return currentPlayer;
  }
};

let discPlayer = document.getElementById("disc__player");
let currentDivOne = document.querySelector(".currentPlayerOne");
let currentDivTwo = document.querySelector(".currentPlayerTwo");
let pagewidth = document.documentElement.clientWidth;

const changeDiscClass = () => {
  pagewidth = document.documentElement.clientWidth;
  if (pagewidth < 1024) {
    discPlayer.classList.toggle("disc__currentPlayerTwo");
  }

  if (pagewidth >= 1024) {
    if (currentPlayer === 1) {
      currentDivOne.classList.add("playerOpacity");
      currentDivTwo.classList.remove("playerOpacity");
    }
    if (currentPlayer === 2) {
      currentDivTwo.classList.add("playerOpacity");
      currentDivOne.classList.remove("playerOpacity");
      discPlayer.classList.remove("disc__currentPlayerTwo");
    }
  }
};

let main = document.getElementsByTagName("main")[0];
let previous = 0;
const updatingGame = (event) => {
  let rowOfGame = 0 
  let lastIndex = 0;
  let column = 0
  if (event.target.classList.contains("column")) {

     column = event.target;
     rowOfGame = column.dataset.column - 1;
     lastIndex = game[rowOfGame].lastIndexOf(0);
  }
  if (event.target.classList.contains("emptyCircle")) {
      column = event.target.parentElement;
      rowOfGame = column.dataset.column - 1;
      lastIndex = game[rowOfGame].lastIndexOf(0);
   
  }
  if (lastIndex !== -1) {
    game[rowOfGame][lastIndex] = currentPlayer;
    if (currentPlayer === 1) {
      column.childNodes[lastIndex].classList.add("player1");
      verifyTie()
      validateVictory()
      changeDiscClass();
      main.classList.toggle(`mainPlayer2`);

    }
    if (currentPlayer === 2) {
      column.childNodes[lastIndex].classList.add("player2");
      verifyTie()
      validateVictory()
      changeDiscClass();
      main.classList.toggle(`mainPlayer2`);
    }
    changePlayer()
  }
  
};
const creatingBoard = () => {
  main.innerHTML = "";
  game = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  game.forEach((row) => {
    let column = document.createElement("section");
    column.addEventListener("click", updatingGame);
    let columnNumber = game.indexOf(row) + 1;
    column.dataset.column = columnNumber;
    column.classList.add("sec");
    let rowNumber = 0;
    row.forEach(() => {
      rowNumber++;
      let row = document.createElement("div");
      row.dataset.row = rowNumber;
      row.classList.add("emptyCircle");
      column.appendChild(row);
    });
    column.classList.add("column");

    
    main.appendChild(column);
  });

  let popupDiv = document.createElement("div");
  popupDiv.className = "victoryPopup hidden";
  main.appendChild(popupDiv);
};
window.onload = () => {
  main.firstElementChild.classList.toggle("startGameAnimation");
};

const startGame = document.getElementById("btnStartGame");
startGame.addEventListener("click", () => {
  main.firstElementChild.classList.toggle("startGameAnimation");
  startGame.parentElement.classList.add("shadeOutAnimation");
  discPlayer.classList.remove("disc__currentPlayerTwo")
  main.classList.remove("mainPlayer2");
  main.classList.add("mainPlayer1");
  currentDivOne.classList.remove("playerOpacity")
  currentDivTwo.classList.add("playerOpacity");
  setTimeout(() => {
    startGame.parentElement.classList.add("hidden");
    creatingBoard();
    const newMain = document.getElementsByTagName("main")[0];
    let gameColumns = [...newMain.children];
    gameColumns.map((element) => {
      element.classList.add("startGameAnimation");
    });
  }, 2000);
});
setInterval(function() {
  pagewidth = document.documentElement.clientWidth;
  if (pagewidth < 1024 && currentPlayer === 2) {
    currentDivOne.classList.remove("playerOpacity");
    discPlayer.classList.add("disc__currentPlayerTwo");
  }
  if (pagewidth >= 1024 && currentPlayer === 2) {
    discPlayer.classList.remove("disc__currentPlayerTwo");
    currentDivTwo.classList.remove("playerOpacity")
    currentDivOne.classList.add("playerOpacity")
  }
}, 50);
