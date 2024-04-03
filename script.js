const quizData = [
    {
      question: "What is JavaScript?",
      options: ["A programming language used for creating dynamic content on webpages.", "A programming language used for creating static content on webpages.", " A database management system.", "A hardware component of a computer."],
      answer: "A programming language used for creating dynamic content on webpages."
    },
    {
      question: "Which keyword is used to declare variables in JavaScript?",
      options: ["Var", "let", "const", "All the above"],
      answer: "All the above"
    },
    {
        question: "What will be the output of the following code? console.log(typeof 42); ",
        options: ["number", "42", "string", "undefined"],
        answer: "number"
      },
      {
        question: "What does the `===` operator do in JavaScript?",
        options: ["Checks for equality without type conversion.", "Checks for equality with type conversion.", "Assigns a value to a variable.", " None of the above."],
        answer: "Checks for equality without type conversion."
      },
      {
        question: "Which of the following is NOT a valid JavaScript data type?",
        options: ["Number", "Boolean", "string", "Character"],
        answer: "Character"
      },
      {
        question: "What is the correct way to write a conditional statement in JavaScript?",
        options: ["if {condition} {code block}", " if (condition) {code block}", "if [condition] {code block}", "if condition {code block}"],
        answer: "if (condition) {code block}"
      },
      {
        question: "What will be the output of the following code? var x = 5; console.log(x++);",
        options: ["6", "5", "4", "Error"],
        answer: "5"
      },
      {
        question: "Which function is used to display a dialog box with a specified message and an OK button in JavaScript?",
        options: ["confirm()", "alert()", "prompt()", "message()"],
        answer: "alert()"
      },
      {
        question: "Which statement is used to stop the execution of a loop in JavaScript?",
        options: ["stop", "exit", "break", "halt"],
        answer: "break"
      },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question-container');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-btn');
  const restartButton = document.getElementById('restart-btn');
  const scoreContainer = document.getElementById('score-container');
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = '';
  
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerText = option;
      optionElement.addEventListener('click', () => checkAnswer(option));
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    const correctAnswer = currentQuizData.answer;
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    optionsContainer.querySelectorAll('.option').forEach(option => {
      if (option.innerText === correctAnswer) {
        option.style.backgroundColor = 'green';
      } else {
        option.style.backgroundColor = 'red';
      }
      option.removeEventListener('click', checkAnswer);
    });
  
    nextButton.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      finishQuiz();
    }
  }
  
  function finishQuiz() {
    questionContainer.innerText = 'Quiz completed!';
    optionsContainer.innerHTML = '';
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
    scoreContainer.innerText = `Your Score: ${score}`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    nextButton.disabled = false;
    nextButton.style.display = 'block';
    restartButton.style.display = 'none';
    scoreContainer.innerText = '';
    loadQuestion();
  }
  
  nextButton.addEventListener('click', nextQuestion);
  restartButton.addEventListener('click', restartQuiz);
  
  loadQuestion();
  