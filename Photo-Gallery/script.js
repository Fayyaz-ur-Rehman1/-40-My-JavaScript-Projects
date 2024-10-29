const inp = document.getElementById("inp");
const sub_Btn = document.getElementById("sub-btn");
const masssage = document.querySelector(".massage");
const imgContainer = document.querySelector(".img");
const createImg = document.createElement("img");


async function displayBtn() {
    for (let i = 0; i < inp.value; i++) {
        const response = await fetch('https://picsum.photos/200/300');
        if (response.ok) {
            const img = document.createElement("img");
            img.src = response.url;
            imgContainer.append(img);
        }
    }

}


sub_Btn.addEventListener("click", () => {
    if (inp.value === "") {
        masssage.innerText = "Select image";
        return;
    } else {
        displayBtn()
    }

})