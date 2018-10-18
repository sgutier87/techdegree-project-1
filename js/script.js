// FSJS - Random Quote Generator

let rgbColor;

// Array of quote objects
let quotes = [
  {
    quote: 'Why do we fall? So we can learn to pick ourselves up.',
    source: 'Thomas Wayne',
    citation: 'Batman Begins',
    year: 2005
  },
  {
    quote: "It's kinda fun to do the impossible.",
    source: 'Walt Disney',
    citation: 'Animated Architecture by by Derek Walker, p. 10',
    year: 1982
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: 'Thomas A. Edison',
    citation: 'The Fabulous Drone by J. L. Elkhorne, pg. 52',
    year: 1967
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: 'Wayne Gretzky'
  },
  {
    quote: 'When I get sad, I stop being sad and be awesome instead. True Story.',
    source: 'Barney Stinson',
    citation: 'How I Met You Mother, 2x01',
    year: 2006
  },
  {
    quote: "In three words I can sum up everything I've learned about life: It goes on.",
    source: 'Robert Frost',
    citation: "Richard Evans' Quote Book, p. 109",
    year: 1973
  },
  {
    quote: 'Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary.',
    source: 'Kanye West',
    citation: 'Twitter',
    year: 2014
  }
];


// Returns a random guote from the "quotes" array
function getRandomQuote(array){
  let randomNumber = Math.floor((Math.random() * array.length));
  return array[randomNumber];
}


// Returns a random number from 1-255 for RGB color value
function randomRGB(){
  return Math.floor(Math.random() * 256);
}


// Returns random RGB color value using "randomRGB" function
function randomColor(){
  let color = 'rgb(';
  color += randomRGB() + ', ';
  color += randomRGB() + ', ';
  color += randomRGB() + ')';
  return color;
}


// Prints the random quote from "getRandomQuote" fuction to the page
// And changes backgound/button color to randon color using "RandomColor" function
function printQuote(){
  rgbColor = randomColor();
  let randomQuote = getRandomQuote(quotes);
  let message = '';
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source; 
  if (randomQuote.citation){
    message += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year){
    message += '<span class="year">' + randomQuote.year + '</span>';
  }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;
  document.getElementById('loadQuote').style.backgroundColor = rgbColor;
  document.getElementById('main-body').style.backgroundColor = rgbColor;
}


// Calls "printQuote" function after 20s
setInterval(printQuote, 20000);


// Calls the "printQuote" function when the "Show another quote" button is clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);




