const [slides, createImg, prevBtn, nextBtn] = [
    document.querySelector(".slide"),
    document.createElement("img"),
    document.querySelector(".prev"),
    document.querySelector(".next")
]
let val = 0;
let randomImg =  createImg.src = ` https://picsum.photos/300?random=${val}`;

prevBtn.addEventListener("click", () => {
    val--
    createImg.src = `${randomImg} ${val}`
})

nextBtn.addEventListener("click", () => {
    val++
    createImg.src = `${randomImg} ${val}`
})

slides.append(createImg)