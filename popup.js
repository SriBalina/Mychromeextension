// Get references to the buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

// Add click event listeners to the buttons
button1.addEventListener("click", () => {
  window.location.href = "popup1.html";
});

button2.addEventListener("click", () => {
  window.location.href = "popup2.html";
});

button3.addEventListener("click", () => {
  window.location.href = "popup3.html";
});
