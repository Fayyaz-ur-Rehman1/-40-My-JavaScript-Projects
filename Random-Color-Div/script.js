const main_Container = document.querySelector(".container");

function display() {
    for (let i = 0; i < 12; i++) {
        const create_Div = document.createElement("div")
        create_Div.setAttribute("class", "child-div")
        create_Div.innerHTML = `<h1>${random_Color()}</h1>`
        create_Div.style.backgroundColor = random_Color();
        main_Container.append(create_Div)
    }
}
display()

function random_Color() {
    let latter = "1234567890abcdf";
    let hash = "#"

    for (let i = 0; i < 6; i++) {
        hash += latter[Math.floor(Math.random() * latter.length)];
    }
    return hash
}

random_Color()

// function random_RGB_Color() {
//     let r = Math.floor(Math.random() * 256); // Red value (0-255)
//     let g = Math.floor(Math.random() * 256); // Green value (0-255)
//     let b = Math.floor(Math.random() * 256); // Blue value (0-255)
//     console.log(`rgb(${r}, ${g}, ${b})`);
// }
// random_RGB_Color();
