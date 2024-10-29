const quots = [
    'The stars align in your favor',
    'In the realm of certainty, it dwells',
    'Trust the cosmic whispers',
    'A resounding affirmative, it is',
    'Destiny has etched a solid "yes"',
    'Visions in the crystal ball say "aye"',
    'The odds appear in your favor',
    'Aye, the winds blow true',
    'Fortune smiles upon your query',
    'The oracles concur with a "yes"',
    'The mists of time obscure the answer',
    'Mysteries must remain, for now',
    'Patience, young seeker, ask in time',
    'The sands of fate yet to settle',
    'Focus your thoughts and inquire anew',
    'The omens speak of shadows',
    'Dark clouds cast doubt on it',
    'My ethereal sources murmur "nay"',
    'The runes spell skepticism',
    'A firm "no" echoes through the void'
]

let [ball_Number, answer] = [
    document.getElementById("ball"),
    document.getElementById("answer")
];

function genrateAns() {
    let randomQuots = Math.floor(Math.random() * quots.length);
    return quots[randomQuots]

}

const rotateBall = () => {
    let rotaition = Math.floor(Math.random() * 360);
    const rotateInterval = setInterval(() => {
        rotaition += Math.floor(Math.random() * 40);
        console.log(rotaition);

        ball_Number.style.transform = `rotate(${rotaition}deg)`

        if (rotaition >= 360) {
            clearInterval(rotateInterval);
            setTimeout(() => {
                showAnswer();
                ball_Number.style.transform = 'rotate(0deg)';
            }, 1000)
        }
    }, 10)
}

const showAnswer = () => {
    const answerQuots = genrateAns();
    answer.textContent = answerQuots;
};

ball_Number.addEventListener('click', () => {
    answer.textContent = "";
    rotateBall();
});
