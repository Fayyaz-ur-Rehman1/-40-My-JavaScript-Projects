let [input, btn, wrng, guesses] = [
    document.getElementById("input"),
    document.getElementById("btn"),
    document.querySelector(".wrng"),
    document.getElementById("guesses")
]

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);
let guessesNum = 0;
btn.addEventListener("click", () => {
    guessNumber();
})

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        e.preventDefault();
        guessNumber();
    }
})


function guessNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
        wrng.innerHTML = "Enter Between 1 to 100";
        input.value = ""
    } else {
        guessesNum++;
        guesses.innerHTML = `No. of Guess : ${guessesNum}`;
        if (input.value > answer) {
            wrng.innerHTML = "You guessed too high!";
            input.value = "";
        } else if (input.value < answer) {
            wrng.innerHTML = "You guessed too low!";
            input.value = "";
        } else {
            wrng.innerHTML = `Congratulations! You guessed the correct number in ${guessesNum} guesses`;

            setTimeout(() => {
                resetGame()
            }, 5000);
        }
    }
}


function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guessesNum = 0;
    input.value = "";
    wrng.innerHTML = "";
    guesses.innerHTML = `NO. of Guess: 0`;
    console.log(answer);

}