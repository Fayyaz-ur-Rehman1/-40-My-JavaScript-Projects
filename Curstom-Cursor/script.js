const [cursor_Dot, cursor_Outline] = [
    document.querySelector(".cursor-dot"),
    document.querySelector(".cursor-outline")
]

window.addEventListener("mousemove", (e) => {
    cursor_Dot.style.top = e.clientY + "px";
    cursor_Dot.style.left = e.clientX + "px";

    cursor_Outline.style.top = e.clientY + "px";
    cursor_Outline.style.left = e.clientX + "px";
})