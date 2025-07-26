let currentIndex = 0;
let score = 0;
let selectedAnswers = {};

window.onload = () => {
  const name = localStorage.getItem("username");
  document.getElementById("usernameDisplay").textContent = name || "User";
  loadQuestion();
};

function loadQuestion() {
  const question = questions[currentIndex];
  document.getElementById("questionText").innerText = `${currentIndex + 1}. ${question.question}`;
  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  question.options.forEach(option => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = option;
    btn.onclick = () => selectOption(btn, option);
    container.appendChild(btn);
  });

  if (selectedAnswers[currentIndex]) {
    Array.from(container.children).forEach(btn => {
      if (btn.innerText === selectedAnswers[currentIndex]) {
        btn.classList.add("selected");
      }
    });
  }

  document.getElementById("qNumber").innerText = currentIndex + 1;
}

function selectOption(btn, option) {
  const siblings = btn.parentElement.children;
  for (let b of siblings) b.classList.remove("selected");
  btn.classList.add("selected");

  selectedAnswers[currentIndex] = option;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    alert("This is the last question. Please click Submit.");
  }
}

function submitQuiz() {
  let score = 0;
  const subjectScores = {};
  const subjectTotals = {};

  questions.forEach((q, index) => {
    const subj = q.subject;
    subjectTotals[subj] = (subjectTotals[subj] || 0) + 1;

    if (selectedAnswers[index] === q.answer) {
      score++;
      subjectScores[subj] = (subjectScores[subj] || 0) + 1;
    } else {
      subjectScores[subj] = subjectScores[subj] || 0;
    }
  });

  document.querySelector(".quiz-box").classList.add("hidden");
  document.querySelector(".controls").classList.add("hidden");
  document.getElementById("scorecard").classList.remove("hidden");

  const name = localStorage.getItem("username") || "User";
  document.getElementById("finalScore").innerHTML =
    `${name}, you scored <strong>${score}/50</strong>`;

  const detailsDiv = document.createElement("div");
  detailsDiv.id = "subjectBreakdown";

  for (const subject in subjectScores) {
    const correct = subjectScores[subject];
    const total = subjectTotals[subject];
    const percent = Math.round((correct / total) * 100);

    const bar = document.createElement("div");
    bar.className = "progress-container";
    bar.innerHTML = `
      <h4>${subject}</h4>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percent}%">${percent}%</div>
      </div>
    `;
    detailsDiv.appendChild(bar);
  }
  document.getElementById("scorecard").appendChild(detailsDiv);
}