const container = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    let firstdiv = document.createElement("div");
    firstdiv.setAttribute("id", "firstdiv");
    for (let j = 0; j < 16; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "divgrid")
        firstdiv.appendChild(div);
    }
    container.appendChild(firstdiv);
}