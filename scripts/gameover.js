const gameOver = () => {
    gameBoard.removeEventListener("click", (event) => {
        console.log(event)
    }, true)
}
