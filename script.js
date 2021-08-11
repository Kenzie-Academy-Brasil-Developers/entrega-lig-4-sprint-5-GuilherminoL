const verifyTie = () =>{
    let tie = true
    game.map((line)=>{
        if (line[0] === 0 ) tie = false
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
    console.log(game)
    console.log(initialGame)
    for(let i=0; i<game.length;i++){
        let column = document.createElement('section')
        column.addEventListener("click", ()=>{
            let lastIndex = game[i].lastIndexOf(0)
            if(lastIndex !==  -1){
            game[i][lastIndex] =  1
        }
    })
        column.dataset.column  = i+1
        for(let j=0; j<game[i].length;j++){
            let circle = document.createElement('div')
            circle.classList.add("circle")
            circle.dataset.column  = j+1
            column.appendChild(circle)
        }
        main.appendChild(column)
    }
}

let btnStart = document.getElementById('btn-reset')

btnStart.addEventListener('click', creatingBoard)