// Function that loops through and adds a click event listener to the squares
const watchForUserClicks = (gameBoardArray) => {
    let userId = 1
    gameBoardArray.forEach(square => {
        square.addEventListener("click", (e) => {
            // console.log(`The clicked box id is: ${e.target.id}`)
            const clickedSquare = e.target

            const clickedSquareId = parseInt(clickedSquare.id)
            // check if the square has an X or O already
            if (clickedSquare.textContent === "") {
                // populate that square to the DOM
                clickedSquare.textContent = returnXorO(userId)
            }

            if (checkUserSquares(usersObj, clickedSquareId)) {
                usersObj[`user${userId}`].squares.push(clickedSquareId)
            }


            const winner = checkIfUserWon(winningCombos, usersObj)

            if (winner !== undefined) {
                alert(`${winner} WON!!`)
                gameOver()
            } else if (winner === undefined && usersObj.user1.squares.length === 5) {
                alert(`Tie...`)
                gameOver()
            }

            // Update userID
            userId = trackUserTurn(userId)
            // console.log(`The user ID for the next turn is ${userId}`)
        })
    });
}