const [inp, subBtn, displayValue] = [
    document.getElementById("put"),
    document.querySelector(".subbtn"),
    document.querySelector(".display-inc")
]

subBtn.addEventListener("click", () => {
    if (inp.value == "") {
        alert("Enter value");
    } else {
        let outVal = 12 * inp.value
        displayValue.innerHTML = outVal.toFixed(2);
        inp.value = ""
    }
})