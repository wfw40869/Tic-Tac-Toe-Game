const gameOver = () => {
    window.addEventListener("click", (event) => {
        event.stopPropagation()
    }, true)
}
