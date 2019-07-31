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



// capture all squares and store them into an array
const htmlSquares = document.querySelectorAll(".square")




// Execute the main function
watchForUserClicks(htmlSquares)





