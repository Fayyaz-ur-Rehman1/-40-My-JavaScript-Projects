let [form, inp_value, container] = [
    document.querySelector("form"),
    document.querySelector("#inp"),
    document.querySelector(".container")
];
// console.log(form, inp_value);


form.addEventListener("submit", handle_Inp);

function handle_Inp(e) {
    e.preventDefault();
    if (!inp_value.value) {
        alert("Plz Enter value")
    } else {
        let inp = inp_value.value;
        let table = [];
        let div = document.createElement("div");
        div.setAttribute("class", "elmDiv")
        for (let i = 1; i <= 10; i++) {
            table.push(inp * i);
        }
        div.innerHTML = ` ${table} <br>`
        container.append(div);
        inp.value = ""
    }
}