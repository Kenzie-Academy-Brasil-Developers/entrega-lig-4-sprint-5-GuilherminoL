const verifyTie = () =>{
    let tie = true
    game.map((line)=>{
        if (line[0] === 0 ) tie = false
    } )
    return tie
}


let main = document.getElementsByTagName('main')[0]
let previous =  0;
const updatingGame = (event) =>{
    let column = event.target.parentElement 
    let rowOfGame = column.dataset.column - 1
    let lastIndex = game[rowOfGame].lastIndexOf(0)
    if(lastIndex !== -1){
        game[rowOfGame][lastIndex] = 1 
        console.log(game)
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
        let rowNumber = 0;
        row.forEach(()=>{
            rowNumber++
            let row = document.createElement("div")
            row.dataset.row = rowNumber
            row.classList.add("circle")
            column.appendChild(row)
        })
        main.appendChild(column)
    })
}

let btnStart = document.getElementById('btn-reset')

btnStart.addEventListener('click', creatingBoard)