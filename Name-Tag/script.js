const [container, input, submit_Btn] = [
    document.querySelector(".grid-container"),
    document.getElementById("inp"),
    document.getElementById("sub")
];


let array = [];

function tagName(e) {
    e.preventDefault();
    if (!input.value) {
        alert("Plz Tag Name")
        return;
    }
    if (array.includes(input.value)) {
        alert("this tag name is arlady exists");
        return;
    }
    array.push(input.value);


    console.log(array);

    const createDiv = document.createElement("div");
    createDiv.setAttribute("class", "tagDiv");
    createDiv.innerHTML = `
    <h2> Hello </h2>
    <p> My name is </p>
    <h1> ${input.value} </h1>
    `
    container.appendChild(createDiv);

    input.value = "";

}

submit_Btn.addEventListener("click", tagName)