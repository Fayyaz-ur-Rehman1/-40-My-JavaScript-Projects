const body = document.body;
let currCircle = null

function createDiv() {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.transform = "translate(-50%, -50%)"
    const size = randomSize(10, 300)
    console.log(size);

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.border = "5px solid white";
    circle.style.background = randomColor();
    body.appendChild(circle);
    return circle
}
currCircle = createDiv();

document.addEventListener("click", (e) => {
    currCircle = createDiv();
    currCircle.style.top = e.clientY + "px";
    currCircle.style.left = e.clientX + "px";
})

document.addEventListener("mousemove", (e) => {
    currCircle.style.top = e.clientY + "px";
    currCircle.style.left = e.clientX + "px";
})

function randomColor() {
    let colorNum = "0123456789ABCDEF";
    let hash = "#";
    for (let i = 0; i < 6; i++) {
        hash += colorNum[Math.floor(Math.random() * 16)]
    }
    console.log(hash);26
    
    return hash
}

function randomSize(min, max) {
    return Math.random() * (max - min) + min
}