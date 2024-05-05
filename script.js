const container = document.querySelector("#grid-container");
const height = 960;
const width = 1500;
let rows = 16;
let columns = 16;

const firstDivHeight = height / rows;

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

divgrid.forEach((div) => div.addEventListener("mouseover", () => div.style.backgroundColor = "red"))

let button = document.querySelector("button");
button.addEventListener("click", function() {
    rows = columns = +prompt("What size do you want ?");
})