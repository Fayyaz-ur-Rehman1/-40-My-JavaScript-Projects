const [formExpense, listExpense] = [
    document.getElementById("expenseForm"),
    document.getElementById("expenseList")
]

formExpense.addEventListener("submit", function (e) {
    e.preventDefault()
    const [description, category, amount] = [
        document.getElementById("description").value,
        document.getElementById("category").value,
        document.getElementById("amount").value
    ]
    if (description && category && !isNaN(amount)) {
        const newrow = document.createElement("tr")
        newrow.innerHTML = `<td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>`

        listExpense.appendChild(newrow);

        document.getElementById("description").value = "";
        document.getElementById("category").value = "";
        document.getElementById("amount").value = "";
    } else {
        alert("Please fill out all fields with valid Data")
    }
})