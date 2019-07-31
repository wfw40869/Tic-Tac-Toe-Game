const gameBoard = document.querySelector("#game__mainTag")

// returns the string of HTML to render the game blocks into
const createGameSquareComponent = (id) => {
    return `
        <section class="square" id="${id}"></section>
    `
}

// RENDER the squares to the DOM
const renderSquaresToDOM = () => {
    for (let index = 0; index < 9; index++) {
        const newSquare = createGameSquareComponent(index)
        gameBoard.innerHTML += newSquare
    }
}

renderSquaresToDOM()