const [timer, startBtn, stopBtn, resetBtn] = [
    document.getElementById("timer"),
    document.getElementById("start"),
    document.getElementById("stop"),
    document.getElementById("reset")
];

let seconds = 0;
let interval = null;

function startFn() {
    interval = setInterval(function () {
        seconds++;
        let Hour = Math.floor(seconds / 3600);
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;

        if (sec < 10) sec = '0' + sec;
        if (min < 10) min = '0' + min;
        if (Hour < 10) Hour = '0' + Hour;

        timer.innerHTML = `${Hour}:${min}:${sec}`
    }, 10)
}


function stopFn() {
    clearInterval(interval)
}


function resetFn() {
    clearInterval(interval)
    seconds = 0;
    timer.innerHTML = "00:00";
}
startBtn.addEventListener("click", startFn)
stopBtn.addEventListener("click", stopFn)
resetBtn.addEventListener("click", resetFn)