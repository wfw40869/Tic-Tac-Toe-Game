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