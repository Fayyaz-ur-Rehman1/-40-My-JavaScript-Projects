const button = document.querySelectorAll("button");

// button.forEach((elm, ind) => {
//     elm.addEventListener("click", () => {
//         console.log(`button No: ${ind + 1}`);
//     })
// })


for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        console.log(`button No: ${i + 1}`);
    })
}