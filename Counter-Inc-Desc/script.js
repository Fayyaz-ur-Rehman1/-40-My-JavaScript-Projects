let [counter_Number, decreementBtn, resetBtn, increementBtn] = [
    document.querySelector(".counter-number"),
    document.querySelector(".decreement"),
    document.querySelector(".reset"),
    document.querySelector(".increement")
]

let count = 0;


function incFn() {
    count++
    counter_Number.innerText = `${count}`
}


function decFn() {
    count--
    counter_Number.innerText = `${count}`
}

function resetFn(){
    count =0;
    counter_Number.innerText = `0`
}
decreementBtn.addEventListener("click", decFn)
resetBtn.addEventListener("click",resetFn)
increementBtn.addEventListener("click", incFn)