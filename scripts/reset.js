const playAgainFunction = () => {
    const playAgainButton = document.querySelector(".playAgain__button")
    const gameContainer = document.querySelector("#game__mainTag")
    const gameBoard = document.querySelectorAll(".square")
    console.log(gameBoard)
    playAgainButton.addEventListener("click", () => {
        gameBoard.forEach(square => {
            square.textContent = ""
        })
        gameContainer.removeChild(playAgainButton)
    })
    usersObj.user1.squares = []
    usersObj.user2.squares = []
    watchForUserClicks(gameBoard)
}
