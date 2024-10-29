const [startBtn, stopBtn, logDiv, stateDiv] =
[
    document.getElementById("start-btn"),
    document.getElementById("stop-btn"),
    document.getElementById("log-div"),
    document.getElementById("state-div")
]
startBtn.addEventListener("click", () => {
document.addEventListener("keydown", keypress)
document.addEventListener("keyup", keypress)
})

stopBtn.addEventListener("click", () => {
document.removeEventListener("keydown", keypress);
document.removeEventListener("keyup", keypress);
logDiv.textContent = "";
stateDiv.textContent = "";
})

function keypress(e) {
if (e.type = "keydown") {
    logDiv.textContent = `key : ${e.key} ${e.type == "keydown" ? "pressed" : "realsed"} `
    stateDiv.textContent = `keybord information : ${e.type}`
}
}
