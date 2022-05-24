// Variable declaration

var startBtn = document.querySelector("#start")
var countDownEL = document.querySelector("#countDown")

// creates the timer to be 1 second
// var seconds = 1000 * 60
// creates variable to represent 1 minute
// var timer = seconds * 60


// Listen for click to initalize the function
startBtn.addEventListener("click", startQuiz)
// Timer Function
function cdTimer() {
  var timeLeft = 90

  var timeInterval = setInterval(function () {

    // Checks to see if time is greater than 1
    if (timeLeft > 1) {
      countDownEL.textContent = timeLeft + " seconds remaining"
      timeLeft--
      console.log(timeLeft)
    } else if (timeLeft === 1) {
      countDownEL.textContent = timeLeft + " second remaining"
      timeLeft--
    } else {
      // once timer reaches 0 then we clear the time counter
      countDownEL.textContent = ""
      // this will stop the timer
      clearInterval(timeLeft)
      // call to a function to execute, this should be a function that resets the code back to zero
    }
  }, 1000)

}


// This will start the quiz, beginnging the timer and transitioning to the questions.
function startQuiz() {
  cdTimer()
}


// const questions = {

// questions: "1. What is Javascript?", a1: " 1. A language to handle logic for HTML", a2: "2. A type of coffee place", a3: "A type of pencil", a4: "None of the above"
// }





// } 