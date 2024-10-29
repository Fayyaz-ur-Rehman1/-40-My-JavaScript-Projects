function myMove() {
    let animationDiv = document.querySelector(".inside");
    let pos = 0;

    const setTime = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(setTime)
        }
        pos++
        animationDiv.style.top = pos + "px";
        animationDiv.style.left = pos + "px";
    }
}