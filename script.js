let quoteDisplay = document.querySelector(".quote");
let authorDisplay = document.querySelector(".author");
let generateBtn = document.querySelector(".generate-btn");

let randomQuote = () => {
  fetch("https://dummyjson.com/quotes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      let quotes = data.quotes;
      let randomIndex = Math.floor(Math.random() * quotes.length);
      let quote = quotes[randomIndex];
      authorDisplay.textContent = quote.author;
      quoteDisplay.textContent = quote.quote;
    });
};

randomQuote();
generateBtn.addEventListener("click", randomQuote);