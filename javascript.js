const container = document.querySelector("#container")


const button = document.querySelector("#prompt")
button.addEventListener("click", () => {
    container.innerHTML = "";
    numberOfSquares = Number(window.prompt("How many squares per side?"));
    const squareSize = (960 / numberOfSquares);
    console.log(squareSize)
    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        const square = document.createElement("div")
            square.classList.add("square")
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            container.appendChild(square)
        square.addEventListener("mouseenter", () => {
        square.classList.add("color")
        })
    }
    }
)






