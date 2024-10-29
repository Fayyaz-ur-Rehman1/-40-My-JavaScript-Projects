const [form, input, ul] = [
    document.querySelector("form"),
    document.getElementById("input"),
    document.querySelector("ul")
]

form.addEventListener("submit", handelInput);

function handelInput(e) {
    e.preventDefault()
    const [editBtn, deleteBtn] = [
        document.createElement("button"),
        document.createElement("button")
    ]
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete"

    editBtn.setAttribute("onclick", "editFn(this)")
    deleteBtn.setAttribute("onclick", "deleteFn(this)")

    if (input.value !== "") {
        const li = document.createElement("li");
        li.setAttribute("id", "mainii");
        li.innerHTML = "आज";

        li.append(editBtn, deleteBtn);
        ul.appendChild(li)
        input.value = ""
    }
}

function editFn(val) {
    let prom = prompt("Edit Value");
    if (prom !== "" && prom !== null) {
        const mainii = document.createElement("li");
        mainii.innerHTML += prom;
        const [editBtn, deleteBtn] = [
            document.createElement("button"),
            document.createElement("button")
        ]
        editBtn.innerText = "Edit";
        deleteBtn.innerText = "Delete";

        mainii.append(editBtn, deleteBtn);
        val.parentElement.replaceWith(mainii)
    }
}

// editBtn.addEventListener("click", function () {
//     editFn(mainii); // is naye li element ke liye edit function ko call karega
// });

function deleteFn(val) {
    if (confirm("this value are delete ok or cancle")) {
        val.parentElement.remove();
    }
}