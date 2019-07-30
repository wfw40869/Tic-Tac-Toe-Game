// CREATE user objects to track which squares they have
const usersObj = {
    user1: {
        squares: [

        ]
    },
    user2: {
        squares: [

        ]
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]




// returns the string of HTML to render the game blocks into
const createGameSquareComponent = (id) => {
    return `
        <section class="square" id="${id}"></section>
    `
}

const gameBoard = document.querySelector("#game__mainTag")





// RENDER the squares to the DOM
const renderSquaresToDOM = () => {
    for (let index = 0; index < 9; index++) {
        const newSquare = createGameSquareComponent(index)
        gameBoard.innerHTML += newSquare
    }
}

renderSquaresToDOM()

// capture all squares and store them into an array
const htmlSquares = document.querySelectorAll(".square")
console.log(htmlSquares)

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
            
            if(winner !== undefined){
                alert(`${winner} WON!!`)
            }

            // Update userID
            userId = trackUserTurn(userId)
            // console.log(`The user ID for the next turn is ${userId}`)
        })
    });
}

// write a function that tracks each users' turn and returns a boolean
const trackUserTurn = (userId) => {
    if (userId === 1) {
        return 2
    } return 1
}

// write a function that takes in a user ID and returns an X or an O
const returnXorO = (userId) => {
    if (userId === 1) {
        return "X"
    } return "O"
}



// write a function that checks if the squareId exists in the users' squares Array
const checkUserSquares = (usersObj, squareId) => {
    const user1Squares = usersObj.user1.squares
    const user2Squares = usersObj.user2.squares
    // if the squareId doesn't currently exist in either array. Return true
    if (user1Squares.includes(squareId) || user2Squares.includes(squareId)) {
        // console.log(usersObj)
        return false
    } else {
        return true
    }
}

// Determines who won the game and returns the variable whoWon which could either be undefined, X or O
const checkIfUserWon = (winningCombos, userObj) => {
    const user1Array = userObj.user1.squares
    const user2Array = userObj.user2.squares
    // declare a variable to track who won
    let whoWon
    for (let i = 0; i < winningCombos.length; i++) {
        // declare counters to increment when a number in the user's squares matches a number in a winning combo
        let winnnerUser1 = 0
        let winnnerUser2 = 0
        for (let j = 0; j < 3; j++) {
            // if there are more than 3 numbers in the user's squares array and if it includes a winning number in the combo
           if(user1Array.length >= 3 && user1Array.includes(winningCombos[i][j])){
            //    increment the users counter
                winnnerUser1++
           } else if( user2Array.length >= 3 && user2Array.includes(winningCombos[i][j])) {
               winnnerUser2++
           } 
        }
        // test if either user's counter made it to 3 then alter whoWon if it did because you need three numbers in a winning combo to win
        if(winnnerUser1 === 3) {
            whoWon = "X"
        } else if(winnnerUser2 === 3) {
            whoWon = "O"
        }
    }
    return whoWon
}





// Execute the main function
watchForUserClicks(htmlSquares)





