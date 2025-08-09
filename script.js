let quoteDisplay = document.querySelector(".quote");
let authorDisplay = document.querySelector(".author");
let generateBtn = document.querySelector(".generate-btn");

let randomQuote = async () => {
  try {
    generateBtn.textContent = "Loading...";

    const res = await fetch("https://dummyjson.com/quotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    let quotes = data.quotes;
    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    authorDisplay.textContent = quote.author;
    quoteDisplay.textContent = quote.quote;
    generateBtn.textContent = "Generate New Quote";
  } catch (error) {
    console.error("Error fetching quotes:", error);
    generateBtn.textContent = "Try Again";
  }
};


generateBtn.addEventListener("click", randomQuote);