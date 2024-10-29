const kits = ['crash', 'kick', 'snare', 'tom']
const containerEl = document.querySelector('.container')


kits.map(kit => {
    const createBtn = document.createElement("button");
    createBtn.classList.add("btn");
    createBtn.innerText = kit;
    createBtn.style.backgroundImage = "url(assets/" + kit + ".png)"
    containerEl.appendChild(createBtn);

    const createAudio = document.createElement("audio");
    createAudio.src = 'music/' + kit + ".mp3"

    createBtn.addEventListener("click", () => {
        createAudio.play();
    })

})