const container = document.querySelector("#grid-container");
const size = 960;
let squares = 16;

// CREATE first grid (squares for 16*16) with size of 960px
createGrid(size, squares);

const button = document.querySelector("button");
// WHEN button clicked
button.addEventListener("click", () => {
    // ASK the user for number of squares
    squares = +prompt("What size do you want ?");
    // WHILE squares > 100, keep asking the user
    while (squares > 100) {
    squares = +prompt("What size do you want ?");
    }
    // REMOVE previous grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(size, squares)
})

function createGrid(size, squares) {
    let divHeight = size / squares;

    for (let i = 0; i < squares; i++) {
        let firstdiv = document.createElement("div");
        firstdiv.setAttribute("id", "firstdiv");
        // SET the div height
        firstdiv.style.height = `${divHeight}px`;
        for (let j = 0; j < squares; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "divgrid")
            // SET the div height and width
            div.style.height = `${divHeight}px`;
            div.style.width = `${size / squares}px`;
            firstdiv.appendChild(div);
        }
        container.appendChild(firstdiv);
    }

    const divgrid = document.querySelectorAll(".divgrid");

    // FOR each div, when mouseover, backgroundColor turn black
    divgrid.forEach((div) => div.addEventListener("mouseover", () => div.style.backgroundColor = "black"))
}