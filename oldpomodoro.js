
var workTime = 25 * 60; // Work time in seconds
var breakTime = 5 * 60; // Break time in seconds
var intervalId;

function startTimer() {
  var timerElement = document.getElementById("timer");
  var startButton = document.getElementById("startButton");
  var resetButton = document.getElementById("resetButton");

  startButton.disabled = true; // Disable the start button
  resetButton.disabled = false; // Enable the reset button

  var totalTime = workTime;
  var minutes, seconds;

  intervalId = setInterval(function () {
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime % 60;

    // Add leading zeros if necessary
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    timerElement.textContent = minutes + ":" + seconds;

    if (totalTime <= 0) {
      clearInterval(intervalId);
      // Switch between work and break times
      if (timerElement.classList.contains("work")) {
        timerElement.classList.remove("work");
        timerElement.classList.add("break");
        totalTime = breakTime;
      } else {
        timerElement.classList.remove("break");
        timerElement.classList.add("work");
        totalTime = workTime;
      }
      startTimer(); // Start the next timer
    }

    totalTime--;
  }, 1000);
}

function resetTimer() {
  var timerElement = document.getElementById("timer");
  var startButton = document.getElementById("startButton");
  var resetButton = document.getElementById("resetButton");

  clearInterval(intervalId);
  timerElement.textContent = "25:00"; // Set the default time
  startButton.disabled = false; // Enable the start button
  resetButton.disabled = true; // Disable the reset button
  timerElement.classList.remove("break");
  timerElement.classList.add("work");
}

// Event listeners
document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);
