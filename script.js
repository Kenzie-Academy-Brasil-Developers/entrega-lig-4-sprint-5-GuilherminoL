
const validateVictory = () => {
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
   

    for(let j = 0; j < game[i].length;j++){
      let currentValue = game[i][j];
      let y = i
      countPlayerRow = 0;
      countComputerRow = 0;

      while (y<5){
        
       let nextPosition = game[y][j]
        if (nextPosition === 0 ) break
        if (nextPosition === currentValue){
          y++;
          countComputerRow++;
        }
        else break
        if(countComputerRow === 4){
          isWinner(currentValue)
          break
        }
        
      }
    }
  }
};

const transverseCompare = () => {
  let countUpwards = 0;
  let countDownwards = 0;
  
    for(let i=0; i<=5;i++){
        console.log(i)
        if(game[3][i] === 1){
            if(game[4][i+1] === 1 && game[5][i+2] === 1 && game[6][i+3] === 1){
                isWinner(1)
            }
        }
        if(game[3][i] === 2){
          if(game[4][i+1] === 2 && game[5][i+2] === 2 && game[6][i+3] === 2){
            isWinner(2)
          }
        }
        if(game[3][i] === 1){
          if(game[2][i-1] === 1 && game[4][i+1] === 1 && game[5][i+2] === 1){
            isWinner(1)
          }
        }
        if(game[3][i] === 2){
          if(game[2][i-1] === 2 && game[4][i+1] === 2 && game[5][i+2] === 2){
            isWinner(2)
          }
        }
        if(game[3][i]=== 1){
          if(game[1][i-2]=== 1 && game[2][i-1] === 1 && game[4][i+1] === 1){
            isWinner(1)
          }
        }
        if(game[3][i]=== 2){
          if(game[1][i-2]=== 2 && game[2][i-1] === 2 && game[4][i+1] === 2){
            isWinner(2)
          }
        }
        if(game[3][i]===1){
          if(game[4][i+1]===1 && game[5][i+2] && game[6][i+3]){
            isWinner(1)
          }
        }



        if(game[3][i]===1){
          if(game[2][i+1]===1 && game[1][i+2]===1 && game[0][i+3]===1 ){
            isWinner(1)
          }
        }if(game[3][i]===2){
          if(game[2][i+1]===2 && game[1][i+2]===2 && game[0][i+3]===2 ){
            isWinner(2)
          }
        }
        if(game[3][i]===1){
          if(game[2][i+1] === 1 && game[4][i-1]===1 && game[5][i-2] === 1){
            isWinner(1)
          }
        }
        if(game[3][i]===2){
          if(game[2][i+1] === 2 && game[4][i-1]===2 && game[5][i-2] === 2){
            isWinner(2)
          }
        }
        if(game[3][i]===1){
          if(game[2][i+1] === 1 && game[1][i+2] === 1 && game[4][i-1] === 1){
            isWinner(1)
          }
        }if(game[3][i]===2){
          if(game[2][i+1] === 2 && game[1][i+2] === 2 && game[4][i-1] === 2){
            isWinner(2)
          }
        }if(game[3][i]===1){
          if(game[4][i-1]===1 && game[5][i-2] === 1 && game[6][i-3] ===1){
            isWinner(1)
          }
        }if(game[3][i]===2){
          if(game[4][i-1]===2 && game[5][i-2] === 2 && game[6][i-3] ===2){
            isWinner(2)
          }
        }
      }
};

const isWinner = (player) => {
  const winMessage = document.getElementsByClassName('victoryPopup')[0]
  const btnPlay = document.createElement('button')
  btnPlay.id='btn-reset'
  btnPlay.innerText = 'Jogar'
  winMessage.innerText = 'Vitória do jogador ' + player
  btnPlay.addEventListener('click', creatingBoard)
  winMessage.appendChild(btnPlay)
  winMessage.classList.remove('hidden')

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
   
    
    if(event.target.classList.contains('column')){

      let column = event.target
     
      let rowOfGame = column.dataset.column - 1;
      let lastIndex = game[rowOfGame].lastIndexOf(0);
      if (lastIndex !== -1) {
        game[rowOfGame][lastIndex] = currentPlayer;
        if (currentPlayer === 1) {
          column.childNodes[lastIndex].classList.add("player1");
          validateVictory()
          verifyTie()
        }
        if (currentPlayer === 2) {
          column.childNodes[lastIndex].classList.add("player2");
          validateVictory()
          verifyTie()
        }
        changePlayer();
        main.classList.toggle(`mainPlayer2`);
      }
    }if(event.target.classList.contains("emptyCircle")){
      let column = event.target.parentElement
      
      let rowOfGame = column.dataset.column - 1;
      let lastIndex = game[rowOfGame].lastIndexOf(0);
      if (lastIndex !== -1) {
        game[rowOfGame][lastIndex] = currentPlayer;
        if (currentPlayer === 1) {
          column.childNodes[lastIndex].classList.add("player1");
          validateVictory()
          verifyTie()
        }
        if (currentPlayer === 2) {
          column.childNodes[lastIndex].classList.add("player2");
          validateVictory()
          verifyTie()
        }
        changePlayer();
        main.classList.toggle(`mainPlayer2`);
      }
    }
  
}
const  creatingBoard  = () =>{
    main.innerHTML=''
     game = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];
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
        
        main.classList.remove("mainPlayer2")
        main.classList.add("mainPlayer1")
        main.appendChild(column)
    })
    
    let popupDiv = document.createElement('div')
    popupDiv.className = 'victoryPopup hidden'
    main.appendChild(popupDiv)
}

creatingBoard()
//btnStart.classList.add("btn-start");
// btnStart.innerText = "Reset";
// btnStart.classList.add("btn-reset");
