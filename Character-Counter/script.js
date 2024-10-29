let [text_Area, total_Charcter, remaining_Charcter] = [
    document.querySelector(".textarea"),
    document.querySelector(".total-Charcters"),
    document.querySelector(".Remaining")
];

text_Area.addEventListener("keyup", () => {
    let text_Area_Length = text_Area.value.length
    total_Charcter.textContent = Number(text_Area_Length)

    remaining_Charcter.textContent = text_Area.getAttribute("maxlength") - Number(text_Area_Length)
})
