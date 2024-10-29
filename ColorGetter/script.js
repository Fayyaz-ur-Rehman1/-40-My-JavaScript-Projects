const [colorBackground, hashNumber, colorPicker] = [
    document.getElementById("colorBackground"),
    document.getElementById("hashNumber"),
    document.getElementById("colorPicker")
]

colorPicker.addEventListener("input", () => {
    const inpValue = colorPicker.value;
    colorBackground.style.backgroundColor = inpValue;
    hashNumber.textContent = inpValue
})