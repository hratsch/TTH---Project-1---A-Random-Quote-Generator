/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array --- this is an array of quotes
***/

const quotes = [
  {
    quote: 'Each failure to sell will increase your chances for success at your next attempt.',
    source: 'Og Mandino',
    citation: 'quotationspage.com',
    year: 1923
  },
  {
    quote: 'A wise man will make more opportunities than he finds.',
    source: 'Sir Francis Bacon',
    citation: 'quotationspage.com',
    year: 1561
  },
  {
    quote: 'We did not change as we grew older; we just became more clearly ourselves.',
    source: 'Lynn Hall',
    citation: 'Where Have All the Tigers Gone?',
    year: 1989
  },
  {
    quote: 'I have never let my schooling interfere with my education.',
    source: 'Mark Twain',
    citation: 'quotationspage.com',
    year: 1835
  },
  {
    quote: "We don't receive wisdom; we must discover it for ourselves after a journey that no one can take for us or spare us.",
    source: 'Marcel Proust',
    citation: 'quotationspage.com',
    year: 1871
  },
  {
    quote: "Cats are intended to teach us that not everything in nature has a function.",
    source: 'Unknown'
  },
  {
    quote: "The world stands aside to let anyone pass who knows where he is going.",
    source: 'David Starr Jordan',
    year: 1931
  },
  {
    quote: "The trouble with being poor is that it takes up all of your time.",
    source: 'Willem de Kooning'
  },
  {
    quote: "Be faithful to that which exists nowhere but in yourself - and thus make yourself indispensable.",
    source: 'Andre Gide',
    citation: 'quotationspage.com',
    year: 1869
  },
  {
    quote: "We do not believe if we do not live and work according to our belief.",
    source: 'Heidi Wills',
    citation: 'quotationspage.com'
  },
  {
    quote: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.",
    source: 'The Dalai Lama'
  }
];

// console.log(quotes);


/***
 * `getRandomQuote` function --- this function basically pulls 
 *  a random quote from the array using the Math.random function
***/

function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

    const quoteRandomNumber = Math.floor(Math.random() * quotes.length);

  //  console.log(quoteRandomNumber);
  

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable

  let quoteGrabber = quotes[quoteRandomNumber];

  // console.log(quoteGrabber);

  // 3. Return the variable storing the random quote object

  return quoteGrabber;
}

getRandomQuote();

/***
 * `printQuote` function --- this function displays the random quote 
 *  to the web page and it also checks for a citation and year property
***/

function printQuote() {
  // 1. Create a variable that calls the getRandomQuote() 
  // function

  const getQuote = getRandomQuote();

  // 2. Create a variable that initiates your HTML string with 
  // the first two <p></p> elements, their classNames, 
  // and the quote and source properties, but leave off 
  // the second closing `</p>` tag for now

  let webRandom = `
    <p class="quote">${getQuote.quote}</p>
    <p class="source">${getQuote.source}`

  // 3. Use an if statement to check if the citation property 
  // exists, and if it does, concatenate a <span></span> 
  // element, appropriate className, and citation property 
  // to the HTML string
 
    if (typeof getQuote.citation === 'string') {
      webRandom += `<span class="citation">${getQuote.citation}</span>`;
  } 

  // 4. Use an if statement to check of the year property exists, 
  // and if it does, concatenate a <span></span> element, 
  // appropriate className, and year property to the HTML 
  //string

    if (typeof getQuote.year === 'number') {
      webRandom += `<span class="year">${getQuote.year}</span>`;
      } 

  // 5. After the two if statements, concatenate the closing </p> 
  // tag to the HTML string

      `</p>`;

  // 6. set the innerHTML of the quote-box div to equal the 
  // complete HTML string

  document.getElementById('quote-box').innerHTML = webRandom;

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

 document.getElementById('load-quote').addEventListener("click", printQuote, false);
