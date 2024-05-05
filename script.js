const container = document.querySelector("#grid-container");
const size = 960;
let squares = 16;

createGrid(size, squares);

const button = document.querySelector("button");
squares = 101;
button.addEventListener("click", () => {
    squares = +prompt("What size do you want ?");
    while (squares > 100) {
    squares = +prompt("What size do you want ?");
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(size, squares)
})

function createGrid(size, squares) {
    let firstDivHeight = size / squares;

    for (let i = 0; i < squares; i++) {
        let firstdiv = document.createElement("div");
        firstdiv.setAttribute("id", "firstdiv");
        firstdiv.style.height = `${firstDivHeight}px`;
        for (let j = 0; j < squares; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "divgrid")
            div.style.height = `${firstDivHeight}px`;
            div.style.width = `${size / squares}px`;
            firstdiv.appendChild(div);
        }
        container.appendChild(firstdiv);
    }

    const divgrid = document.querySelectorAll(".divgrid");

    divgrid.forEach((div) => div.addEventListener("mouseover", () => div.style.backgroundColor = "black"))
}