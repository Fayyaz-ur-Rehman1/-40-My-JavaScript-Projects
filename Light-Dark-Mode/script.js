let [inp, body] = [
    document.querySelector(".input"),
    document.body
];

inp.addEventListener("click", updateBody);

function updateBody() {
    if (inp.checked) {
        body.style.background = "black";
    } else {
        body.style.background = "white";
    }
}