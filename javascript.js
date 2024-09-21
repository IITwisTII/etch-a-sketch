const container = document.querySelector("#container")


const button = document.querySelector("#prompt")
button.addEventListener("click", () => {
    container.innerHTML = "";
    newGrid = Number(window.prompt("How many squares per side?"));
    console.log(`You asked for ${newGrid} amount of squares per line`)

    for (let i = 0; i < newGrid; i++) {
        for (let i = 0; i < newGrid; i++) {
            const square = document.createElement("div")
            square.classList.add("square")
            container.appendChild(square)
            square.addEventListener("mouseenter", () => {
            square.classList.add("color")
            console.log("mouse on")
            })
        }
    }
})






