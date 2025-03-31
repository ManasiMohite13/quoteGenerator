const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteBtn = document.getElementById("new-quote");

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = `"${data.content}"`;
    author.innerHTML = `— ${data.author}`;
}

// Fetch new quote when button is clicked
quoteBtn.addEventListener("click", () => getQuote(api_url));

// Fetch a quote when the page loads
getQuote(api_url);