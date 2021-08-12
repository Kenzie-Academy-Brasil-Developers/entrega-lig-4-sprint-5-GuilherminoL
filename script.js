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
        main.classList.toggle(`mainPlayer2`)
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
        main.classList.remove("mainPlayer2")
        main.classList.add("mainPlayer1")
        main.appendChild(column)
    })
    
}

let btnStart = document.getElementById('btn-reset')

btnStart.addEventListener('click', creatingBoard)