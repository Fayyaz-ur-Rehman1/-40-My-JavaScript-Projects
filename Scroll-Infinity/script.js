async function displayBtn() {
    const container = document.getElementById("container");
    for (let i = 0; i < 8; i++) {
        const response = await fetch('https://picsum.photos/200/300');
        if (response.ok) {
            const img = document.createElement("img");
            img.src = response.url;
            container.append(img);
        }
    }
}

displayBtn();

window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        displayBtn();
    }
})