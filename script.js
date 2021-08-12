
const validateVictory = () => {
  rowCompare();
  columnCompare();
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

const rowCompare = () => {
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

const verifyTie = () =>{
    
    let tie = true
    game.map((line)=>{
        if (line[0] === 0 ){
            tie = false   
        }
    } )
    return tie
}

let changePlayer = () =>{
    if (currentPlayer === 2) {
        currentPlayer = 1
        return currentPlayer
    }
    if (currentPlayer === 1) {
        currentPlayer = 2
        return currentPlayer
    }
}

let currentPlayer = 1

let main = document.getElementsByTagName('main')[0]
let previous =  0;
const updatingGame = (event) =>{
    let column = event.target.parentElement 
    let rowOfGame = column.dataset.column - 1
    let lastIndex = game[rowOfGame].lastIndexOf(0)
    if(lastIndex !== -1){
        game[rowOfGame][lastIndex] = currentPlayer
        if(currentPlayer === 1){
            column.childNodes[lastIndex].classList.add('player1')
            verifyTie()
            
            
        } if(currentPlayer === 2){
            column.childNodes[lastIndex].classList.add('player2')
            verifyTie()
        }
        changePlayer()
    }   
    
}
const  creatingBoard  = () =>{
    main.innerHTML=''
    game = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
    ]
    game.forEach((row) =>{
        let column = document.createElement('section')
        column.addEventListener("click", updatingGame)
        let columnNumber = game.indexOf(row) + 1
        column.dataset.column = columnNumber
        column.classList.add('sec')
        let rowNumber = 0;
        row.forEach( () =>{
            rowNumber++
            let row = document.createElement("div")
            row.dataset.row = rowNumber
            row.classList.add("emptyCircle")
            column.appendChild(row)
        })
        column.classList.add("column")
        main.appendChild(column)
    })
    
}

let btnStart = document.getElementById('btn-reset')

btnStart.addEventListener('click', creatingBoard)

