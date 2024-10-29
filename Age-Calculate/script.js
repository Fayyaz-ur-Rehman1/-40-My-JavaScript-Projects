const [btn, birthday, result] = [
    document.getElementById("btn"),
    document.getElementById("birthday"),
    document.getElementById("result")
]


function ageFn() {
    if (!birthday.value) {
        alert("plz enter your age")
    } else {
        let age = getAge(birthday.value);
        result.innerText = `Your age is ${age} year old`
    }
}

function getAge(birthdayVal) {
    let currentDate = new Date();
    let birthdayDate = new Date(birthdayVal);

    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    return age
}

btn.addEventListener("click", ageFn);