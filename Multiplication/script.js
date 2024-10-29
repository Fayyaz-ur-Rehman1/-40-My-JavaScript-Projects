let [form, score, question, inp, submit, empty_Value] = [
    document.querySelector("form"),
    document.querySelector(".score"), // ".score" pe correct class honi chahiye
    document.querySelector(".random-question"),
    document.querySelector("#inp"),
    document.querySelector("#sub"),
    document.querySelector(".empty")
];
let [num1, num2] = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
];
let userScore = 0;
let correctAns = num1 * num2;

question.innerText = `What is ${num1} Multiply by ${num2}?`;
score.innerText = `Score: ${userScore}`;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!inp.value) {
        empty_Value.innerText = 'Please enter a number';
    } else {
        empty_Value.innerText = "";
        let userAns = Number(inp.value);

        if (userAns === correctAns) {
            userScore++;
        } else {
            userScore--;
        }


        score.innerText = `Score: ${userScore}`;
        //    Genrate new quetion
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        correctAns = num1 * num2;
        question.innerText = `What is ${num1} Multiply by ${num2}?`;

        inp.value = "";
    }
});
