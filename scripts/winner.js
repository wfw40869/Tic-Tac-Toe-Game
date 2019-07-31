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
            if (user1Array.length >= 3 && user1Array.includes(winningCombos[i][j])) {
                //    increment the users counter
                winnnerUser1++
            } else if (user2Array.length >= 3 && user2Array.includes(winningCombos[i][j])) {
                winnnerUser2++
            }
        }
        // test if either user's counter made it to 3 then alter whoWon if it did because you need three numbers in a winning combo to win
        if (winnnerUser1 === 3) {
            whoWon = "X"
        } else if (winnnerUser2 === 3) {
            whoWon = "O"
        }
    }
    return whoWon
}