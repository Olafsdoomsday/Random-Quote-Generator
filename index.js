const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Be yourself; everyone else is already taken",
        author: "Oscar Wilde",
    },
    {
        quote: "Well done is better than well said",
        author: "Benjamin Franklin",
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
]

const button = document.getElementById("next-quote-button");
const quoteElement = document.getElementById("quote") //.innerText
const quoteAuthor = document.getElementById("quote-author")

function randomInt(min, max) {
    let mi = Math.ceil(min);
    let ma = Math.floor(max);
    return Math.floor(Math.random() * (ma - mi + 1)) + mi;
}

// quoteElement.innerText

let quoteSave = quotes[0];    // starts with the first quote.     has to be a single quote.   variable that saves the quote
// if the quotesave is the quote


function changeQuote() {
    // get a quote
    const randomNum = randomInt(0, quotes.length-1);
    const quote = quotes[randomNum]; //
    // let quote2 = quotes[1]; 
    // let quote3 = quotes[2];
    // let quote4 = quotes[3];
    // let quote5 = quotes[4];
    
    // put quote into the html
    quoteElement.innerText = quote.quote
    quoteAuthor.innerText = quote.author
     
    // save what quote we are using : extra

    // if the quotesave is the same as the quote, redo this founction

    if (quoteSave == quote){ // double equal checks if its equal and doenst change anything, 
        changeQuote();
    } else {
        quoteSave = quote;
        console.log(randomNum, quote)
    }
}

button.onclick = changeQuote; // when you click the button a quote comes



