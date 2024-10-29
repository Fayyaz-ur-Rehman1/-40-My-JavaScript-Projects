document.addEventListener("DOMContentLoaded", () => {
    const [quoteBtn, randomQuotes, quotesWriter] = [
        document.querySelector(".qoutes-btn"),
        document.querySelector(".random-quotes"),
        document.querySelector(".quotes-writer")
    ];

    let random;
    quoteBtn.addEventListener("click", () => {
        random = Math.floor(Math.random() * 100);
        fetch("https://api.quotable.io/random")
            .then((res) => {
                return res.json(); // Properly return the JSON response
            })
            .then((data) => {
                quotesWriter.innerText = `Author: ${data.author}`;
                randomQuotes.innerText = `Quote: ${data.content}`; // Use the fetched quote
            })
            .catch((error) => {
                console.error("Error fetching the quote:", error);
                randomQuotes.innerText = "An error occurred. Please try again."; // Error handling
            });
    });
});
