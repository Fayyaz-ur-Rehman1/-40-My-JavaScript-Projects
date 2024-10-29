let [count, dec_Btn, res_Btn, inc_Btn] = [
    document.querySelector(".count"),
    document.querySelector(".decrease"),
    document.querySelector(".reset"),
    document.querySelector(".increase")
];

let score = 0;
let intervalId = null;

// Decrease  function
function decFn() {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        score--;
        count.innerText = `${score}`;
        count.style.color = "red"
    }, 500);
}

// Increase function
function incFn() {
    clearInterval(intervalId);
    intervalId = setInterval(function () {
        score++;
        count.innerText = `${score}`;
        count.style.color = "green"
    }, 500);
}

// Reset function
function resetFn() {
    clearInterval(intervalId);
    score = 0;
    count.innerText = `${score}`;
    count.style.color = "cadetblue"
}

// Event listeners
dec_Btn.addEventListener("click", decFn);
inc_Btn.addEventListener("click", incFn);
res_Btn.addEventListener("click", resetFn);