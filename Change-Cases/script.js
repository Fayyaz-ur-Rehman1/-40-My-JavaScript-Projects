const [cases_Box, capitalize_Btn, upperCase_Btn, lowerCase_Btn] = [
    document.querySelector(".change-Case-Box"),
    document.querySelector(".capitalize"),
    document.querySelector(".Uppercase"),
    document.querySelector(".lowercase")
];
console.log(cases_Box);

function capitalizeFn() {
    let content = cases_Box.textContent;
    let spl = content.split(" ")
    for (let i = 0; i < spl.length; i++) {
        let getValue = spl[i];
        let capitalizeVlaue = getValue.charAt(0).toUpperCase() + getValue.slice(1);
        spl[i] = capitalizeVlaue
    }
    cases_Box.textContent = spl.join(" ")
}

function upperCaseFn() {
    let uppercase = cases_Box.innerText
    cases_Box.innerHTML = uppercase.toUpperCase();
}

function lowerCaseFn() {
    let lowercase = cases_Box.innerText
    cases_Box.innerHTML = lowercase.toLowerCase();
}

capitalize_Btn.addEventListener("click", capitalizeFn);
upperCase_Btn.addEventListener("click", upperCaseFn);
lowerCase_Btn.addEventListener("click", lowerCaseFn);