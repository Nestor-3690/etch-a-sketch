const container = document.querySelector("#grid-container");
const height = 960;
const width = 1500;
let rows = 16;
let columns = 16;

let firstDivHeight = height / rows;

for (let i = 0; i < 16; i++) {
    let firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "firstdiv");
    firstdiv.style.height = `${firstDivHeight}px`;
    for (let j = 0; j < 16; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "divgrid")
        div.style.height = `${firstDivHeight}px`;
        div.style.width = `${width / columns}px`;
        firstdiv.appendChild(div);
    }
    container.appendChild(firstdiv);
}

const divgrid = document.querySelectorAll(".divgrid");

divgrid.forEach((div) => div.addEventListener("mouseover", () => div.style.backgroundColor = "black"))

const button = document.querySelector("button");
let newSize = 101;
button.addEventListener("click", () => {
    newSize = +prompt("What size do you want ?");
    while (newSize > 100) {
    newSize = +prompt("What size do you want ?");
    }

    firstDivHeight = height / newSize;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < newSize; i++) {
        let firstdiv = document.createElement("div");
        firstdiv.setAttribute("id", "firstdiv");
        firstdiv.style.height = `${firstDivHeight}px`;
        for (let j = 0; j < newSize; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "divgrid")
            div.style.height = `${firstDivHeight}px`;
            div.style.width = `${width / newSize}px`;
            firstdiv.appendChild(div);
        }
        container.appendChild(firstdiv);
    }
    const divgrid = document.querySelectorAll(".divgrid");

    divgrid.forEach((div) => div.addEventListener("mouseover", () => div.style.backgroundColor = "black"))
})