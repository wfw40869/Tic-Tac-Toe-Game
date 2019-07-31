// Function that loops through and adds a click event listener to the squares
const watchForUserClicks = (gameBoardArray) => {
    let userId = 1
    gameBoardArray.forEach(square => {
        square.addEventListener("click", (e) => {
            // grab the square that was clicked
            const clickedSquare = e.target

            const clickedSquareId = parseInt(clickedSquare.id)
            
            if (checkUserSquares(usersObj, clickedSquareId, clickedSquare)) {
                // check if the square has an X or O already
                if (clickedSquare.textContent === "") {
                    // populate that square to the DOM
                    clickedSquare.textContent = returnXorO(userId)
                    // add the id of the square to the corresponding user object array
                    usersObj[`user${userId}`].squares.push(clickedSquareId)
                    // Update userID
                    userId = trackUserTurn(userId, clickedSquare)
                }
            }


            const winner = checkIfUserWon(winningCombos, usersObj)

            if (winner !== undefined) {
                alert(`${winner} WON!!`)
                gameOver()
                gameBoard.innerHTML += createPlayAgainButton()
                playAgainFunction()
            } else if (winner === undefined && usersObj.user1.squares.length === 5) {
                alert(`Tie...`)
                gameOver()
                gameBoard.innerHTML += createPlayAgainButton()
                playAgainFunction()
            }

            // console.log(`The user ID for the next turn is ${userId}`)
        })
    });
}