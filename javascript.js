const container = document.querySelector("#container")

for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild(square)
        square.addEventListener("mouseenter", () => {
        square.classList.add("color")
        console.log("mouse on")
        })
    }
}



