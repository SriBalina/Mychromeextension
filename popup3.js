fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const quoteData = data[randomIndex];
      const quote = quoteData.text;
      const author = quoteData.author || "Anonymous";

      // Update the quote text and author in the HTML
      document.querySelector(".quote-text").textContent = quote;
      document.querySelector(".quote-author").textContent = author;
    })
    .catch(error => {
      console.log("Failed to fetch quote:", error);
      document.querySelector(".quote-text").textContent = "Failed to fetch quote";
    });