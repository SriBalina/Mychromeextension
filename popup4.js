// Fetch a random quote from the Zen Quotes API
fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');
    // Update the quote text and author in the HTML
    document.querySelector(".quote-text").textContent = jokeText;
    document.querySelector(".quote-author").textContent = jokeElement;
  })
  .catch(error => {
    console.log(error);
    document.querySelector(".quote-text").textContent = "Failed to fetch quote";
  });