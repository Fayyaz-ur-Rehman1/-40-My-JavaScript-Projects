document.getElementById("image-input").addEventListener("change", function () {
    const imgContainer = document.getElementById("image-container");
    const uploadedImage = document.getElementById("uploaded-image");
    const file = this.files[0]
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            imgContainer.style.display = "block"
        }
        reader.readAsDataURL(file)
    } else {
        imgContainer.style.display = "none"
    }
})

document.getElementById("resize-button-instagram").addEventListener("click", function () {
    resizing(180, 180);
})

document.getElementById("resize-button-facebook").addEventListener("click", function () {
    resizing(120, 60);

})

document.getElementById("resize-button-twitter").addEventListener("click", function () {
    resizing(100, 67);

})

document.getElementById("resize-button-website").addEventListener("click", function () {
    resizing(60, 30);

})

function resizing(width, height) {
    const uploadedImage = document.getElementById('uploaded-image');

    uploadedImage.width = width;
    uploadedImage.height = height;
}