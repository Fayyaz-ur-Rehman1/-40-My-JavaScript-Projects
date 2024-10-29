let [inp_val, btn] = [
    document.querySelector("#inp"),
    document.querySelector(".btn")
]
btn.addEventListener("click", (e) => {
    e.preventDefault()

    inp_val.value = randomPassword()
})


function randomPassword() {
    let [upperCase, lower, strongText, num] = [
        "ABCDEFGHIJKLMNOPQRSTWXYZ",
        "abcdefghijklmnopqrstwsyz",
        "~!@#$%^&*()-_,.;'/\][{}",
        "0123456789"
    ]

    let concat = `${upperCase}${lower}${strongText}${num}`
    let password = "";

    for (let i = 0; i < 8; i++) {
        let randomGenrator = Math.floor(Math.random() * concat.length);
        password += concat[randomGenrator]
    }
    return password
}