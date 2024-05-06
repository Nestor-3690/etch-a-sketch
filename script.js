const container = document.querySelector("#grid-container");
const size = 700;
let squares = 16;

const normal = document.querySelector("#normal");
const rgb = document.querySelector("#rgb");
const opacity = document.querySelector("#opacity");
let isNormal = true;
let isRGB = false;
let isOpacity = false;

// CREATE first grid (squares for 16*16) with size of 960px
createGrid(size, squares);

normal.addEventListener("click", () => {
    isNormal = true;
    isRGB = isOpacity = false;
    createGrid(size, squares);
})

rgb.addEventListener("click", () => {
    isRGB = true;
    isNormal = isOpacity = false;
    createGrid(size, squares);
})

opacity.addEventListener("click", () => {
    isOpacity = true;
    isNormal = isRGB = false;
    createGrid(size, squares);
})

const button = document.querySelector("#gridsize");
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
    divgrid.forEach((div) => div.addEventListener("mouseover", () => {
        if (isNormal === true) {
            div.style.backgroundColor = "black"
        } else if (isRGB === true) {
            let colorOne = Math.round((Math.random()) * 255);
            let colorTwo = Math.round((Math.random()) * 255);
            let colorThree = Math.round((Math.random()) * 255);
            div.style.backgroundColor = `rgb(${colorOne}, ${colorTwo}, ${colorThree}`;
        } else {
            let actualOpacity = Number(div.style.opacity) * 100;
            if (actualOpacity !== 0){
                actualOpacity += 10;
                if (actualOpacity > 100) {
                    actualOpacity = 100;
                }
                div.style.opacity = `${actualOpacity}%`;
            } else {
                actualOpacity = "10%";
                div.style.opacity = actualOpacity;
            }
        }
    }))
}

// div.setAttribute("style", `background-color: rgb(${colorOne}, ${colorTwo}, ${colorThree});`)