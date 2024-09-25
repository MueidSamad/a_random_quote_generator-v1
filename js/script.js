/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
    citation: "Inaugural Address",
    year: 1933
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    citation: "Nobel Prize Speech",
  },
  {
    quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
    year: 1866
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    citation: "Nature",
  },
  {
    quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    year: 1980
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    citation: "Management Book",
    year: 1954
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];

}


/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  // Start building the HTML string
  let quoteHTML = `
 <p class="quote">${randomQuote.quote}</p>
 <p class="source">${randomQuote.author}`;

  // Check for citation property
  if (randomQuote.citation) {
    quoteHTML += `<span class="citation"> ${randomQuote.citation}</span>`;
  }

  // Check for year property
  if (randomQuote.year) {
    quoteHTML += `<span class="year"> ${randomQuote.year}</span>`;
  }

  // Close the source paragraph
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML; 
}



  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/

  document.getElementById('load-quote').addEventListener("click", printQuote, false);