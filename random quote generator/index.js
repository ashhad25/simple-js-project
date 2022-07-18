async function showNextQuote()
{
  const api_url ="https://api.quotable.io/quotes";
  const response = await fetch(api_url);
  var data = await response.json();
  var quotes = data.results;
  var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
  document.getElementById('quote').innerHTML = `"${randomQuote.content}"`;
  document.getElementById('author').innerHTML = `-${randomQuote.author}`;
}
window.setInterval(function(){
  showNextQuote();
  }, 15000);

document.getElementById('buttonQuote').addEventListener("click", showNextQuote, false);