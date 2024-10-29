// const getImg = document.querySelectorAll(".carton-img");

// let activeImg = null;

// getImg.forEach(img => {
//     img.addEventListener("click", () => {
//         if (activeImg === img) {
//             activeImg.classList.remove("active");
//             activeImg = null;
//         } else {
//             if (activeImg) {
//                 activeImg.classList.remove("active");
//             }
//             img.classList.add("active");
//             activeImg = img;
//         }
//     });
// });


const getImg = document.querySelectorAll(".carton-img");

getImg.forEach(e => {
    e.addEventListener("click", () => {
        getImg.forEach(img => img.classList.remove("active"));

        e.classList.add("active")
    })
})