const correctAnswers = ["B", "B", "B", "B", "B", "B", "B", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const restartButton = document.querySelector(".restart-button");

// Hide the restart button when the page loads
restartButton.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswer = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
  ];

  userAnswer.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });

  scrollTo(0, 0);

  result.style.display = "block"; // Show the result

  // Show the restart button after the quiz is submitted
  restartButton.style.display = "block";

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

restartButton.addEventListener("click", () => {
  result.style.display = "none"; // Hide the result
  restartButton.style.display = "none"; // Hide the restart button
  form.reset(); // Reset the form
});
