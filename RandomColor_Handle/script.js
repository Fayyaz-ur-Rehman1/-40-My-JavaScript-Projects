const [startBtn, stopBtn, body, hashNum] = [
    document.querySelector(".startBtn"),
    document.querySelector(".stopBtn"),
    document.body,
    document.querySelector(".hashNum")
];
let flag = true
startBtn.addEventListener("click", () => {
    let interval = setInterval(function () {
        body.style.backgroundColor = getRamdomBgColor();
    }, 500)

    stopBtn.addEventListener("click", () => {
        clearInterval(interval)
        hashNum.innerText = getRamdomBgColor().valueOf();
    })
})



function getRamdomBgColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}