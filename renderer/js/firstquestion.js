let time = document.getElementById('time');    
let startExam = document.getElementById('start-quiz');
let submitQuiz = document.getElementById('submit-quiz');
let timer = document.getElementById('timer');
let goodJobResult = document.getElementById('goodJobResult');
let timerInterval;
let timeRemaining;


function startQuiz() {
    const selectedTime = document.getElementById('timer').value;
    if (!selectedTime) {
        alert("Please select a timer duration.");
        return;
    }
    var modalCheckbox = document.getElementById('modal-1');
    modalCheckbox.checked = false;
   
    timeRemaining = parseInt(selectedTime);
    time.textContent = formatTime(timeRemaining); 
    startExam.style.display = 'none';
    submitQuiz.style.display = 'block';
    const resultsContainer = document.getElementById('results');
    resultsContainer.style.display = 'none';
    buildQuiz();
    startTimer();
    }


    
    function startTimer() {
        timerInterval = setInterval(() => {
           
    
            timeRemaining--;
            time.innerHTML = formatTime(timeRemaining); 
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                showResults2();
            }
        }, 1000);
        }

        function formatTime(timeInSeconds) {
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            const seconds = timeInSeconds % 60;
        
            let formattedTime = "";
            if (hours > 0) {
                formattedTime += hours  + " hr ";
            }
            if (minutes > 0 || hours > 0) {
                formattedTime += minutes + ":";
            }
            if (seconds > 0 || (minutes === 0 && hours === 0)) {
                if ((minutes === 0 && seconds < 29) || (hours === 0 && minutes === 1 && seconds < 29)) {
                    formattedTime += '<span style="color:red">' + seconds + '</span>';
                } else {
                    formattedTime += seconds ;
                }
            }
        
            return formattedTime.trim();
        }
        
        
        
        
        function buildQuiz() {
            shuffleQuestions(); // Shuffle the questions
            const quizContainer = document.getElementById('quiz');
            const output = [];
        
            questions.forEach((currentQuestion, questionNumber) => {
                const answers = [];
                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<li>
                            <label>
                                <input type="radio" name="question${questionNumber}" value="${letter}">
                                <span class="radio-custom"></span>
                                ${letter} ${currentQuestion.answers[letter]}
                            </label>
                        </li>`
                    );
                   
                       
                }
        
                output.push(
                    `<div class="question">
                        <h2>${currentQuestion.question}</h2>
                        <ul class="answers">${answers.join('')}</ul>
                    </div>`
                );
            });
        
            quizContainer.innerHTML = output.join('');
        }

        function handleAnswerSelection(event) {
            if (event.target.tagName === 'INPUT') {
                const labels = document.querySelectorAll('.answers label');
                labels.forEach(label => {
                    label.classList.remove('selected');
                });
                const selectedLabel = event.target.parentElement;
                selectedLabel.classList.add('selected');
            }
        }

        function showResults2() {
            clearInterval(timerInterval);
            const answerContainers = document.querySelectorAll('.answers');
            let numCorrect = 0;
            let unansweredQuestionIndex = -1; // Initialize index of unanswered question
            let incorrectAnswers = []; // Array to store incorrect answers
        
            questions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;
                    answerContainer.style.color = 'green';
                    answerContainer.querySelector(`input[value=${currentQuestion.correctAnswer}]`).parentNode.classList.add('correct');
                } else {
                    answerContainer.style.color = 'red';
                    answerContainer.querySelector(`input[value=${currentQuestion.correctAnswer}]`).parentNode.classList.add('correct');
                    if (userAnswer) {
                        answerContainer.querySelector(`input[value=${userAnswer}]`).parentNode.classList.add('incorrect');
                        console.log(currentQuestion);
                    incorrectAnswers.push({
                        question: currentQuestion.question,
                        correctAnswer: currentQuestion.answers[currentQuestion.correctAnswer],
                        userAnswer: currentQuestion.answers[userAnswer]
                    });
                    } else if (unansweredQuestionIndex === -1) {
                        unansweredQuestionIndex = questionNumber; // Set index of first unanswered question
                    }
                }
            });
        
            const resultsContainer = document.getElementById('results');
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = `You got ${numCorrect} out of ${questions.length} correct.`;
            if (numCorrect === questions.length) {
                resultsContainer.innerHTML += "<br>Congratulations! You passed the exam.";
            } else {
                resultsContainer.innerHTML += "<br>Sorry, you did not pass the exam.";
            }
        
             // Display incorrect answers
             const wrongAnswerContainer = document.getElementById('wrongAnswer');
            wrongAnswerContainer.style.display = 'block';
            wrongAnswerContainer.innerHTML = '<h3>Incorrect Answers:</h3>';
            incorrectAnswers.forEach((incorrect) => {
                wrongAnswerContainer.innerHTML += `
                    <div class="incorrect-answer">
                        <p><strong>Question:</strong> ${incorrect.question}</p>
                        <p><strong>Your Answer:</strong> <span class="wrong">${incorrect.userAnswer}</span></p>
                        <p><strong>Correct Answer:</strong> <span class="correct2">${incorrect.correctAnswer}</span></p>
                    </div>`;
            });
        
            goodJobResult.innerHTML = resultsContainer.innerHTML;
            showModalAfterDelay();
            startExam.style.display = 'block'; // Display restart button
            document.getElementById('submit-quiz').style.display = 'none'; // Hide submit button
        
            
        }
        


        function showResults() {
            const answerContainers = document.querySelectorAll('.answers');
            let unansweredQuestions = [];
            let incorrectAnswers = []; // Array to store incorrect answers
            let numCorrect = 0;
        
            questions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;
                
                if (!userAnswer) {
                    unansweredQuestions.push(questionNumber);
                } else if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;
                } else {
                    
                    incorrectAnswers.push({
                        question: currentQuestion.question,
                        correctAnswer: currentQuestion.answers[currentQuestion.correctAnswer],
                        userAnswer: currentQuestion.answers[userAnswer]
                    });
                }
            });
        
            if (unansweredQuestions.length > 0) {
                alert('Please answer all questions before submitting.');
                const highestUnansweredIndex = Math.max(...unansweredQuestions);
                const lowestUnansweredIndex = Math.min(...unansweredQuestions);
               
                for (let i = highestUnansweredIndex; i >= lowestUnansweredIndex; i--) {
                    const unansweredQuestion = document.querySelectorAll('.question')[i];
                    unansweredQuestion.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
        
                return; // Exit the function without further processing
            }
        
            // Calculate passing grade
            calculateScore();
            const passingGrade = Math.ceil(questions.length * 0.6);
            const pass = numCorrect >= passingGrade;
        
            // Display the results
            const resultsContainer = document.getElementById('results');
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = `You got ${numCorrect} out of ${questions.length} correct.`;
            if (pass) {
                resultsContainer.innerHTML += "<br>Congratulations! You passed the exam.";
            } else {
                resultsContainer.innerHTML += "<br>Sorry, you did not pass the exam.";
            }
        
            // Display incorrect answers
            const wrongAnswerContainer = document.getElementById('wrongAnswer');
            wrongAnswerContainer.style.display = 'block';
            wrongAnswerContainer.innerHTML = '<h3>Incorrect Answers:</h3>';
            incorrectAnswers.forEach((incorrect) => {
                wrongAnswerContainer.innerHTML += `
                    <div class="incorrect-answer">
                        <p><strong>Question:</strong> ${incorrect.question}</p>
                        <p><strong>Your Answer:</strong> <span class="wrong">${incorrect.userAnswer}</span></p>
                        <p><strong>Correct Answer:</strong> <span class="correct2">${incorrect.correctAnswer}</span></p>
                    </div>`;
            });
        
           
        
            goodJobResult.innerHTML = resultsContainer.innerHTML;
            showModalAfterDelay();
            document.getElementById('start-quiz').style.display = 'block'; // Display restart button
            document.getElementById('submit-quiz').style.display = 'none'; // Hide submit button
            clearInterval(timerInterval);
        }

        function calculateScore() {
            const answerContainers = document.querySelectorAll('.answers');
            let numCorrect = 0;
        
            questions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;
                    answerContainer.querySelector(`input[value=${currentQuestion.correctAnswer}]`).parentNode.classList.add('correct');
                } else {
                    if (userAnswer) {
                        answerContainer.querySelector(`input[value=${userAnswer}]`).parentNode.classList.add('incorrect');
                    } else {
                        unansweredQuestions.push(questionNumber); 
                    }
                    answerContainer.querySelector(`input[value=${currentQuestion.correctAnswer}]`).parentNode.classList.add('correct-answer');
                }
            });
        
            return numCorrect;
        }

        function shuffleQuestions() {
            // Reset question numbers
            for (let i = 0; i < questions.length; i++) {
                questions[i].question = questions[i].question.replace(/^\d+\.\s/, ''); // Remove existing number
            }
        
            for (let i = questions.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [questions[i], questions[j]] = [questions[j], questions[i]];
            }
        
            // Update question numbers after shuffling
            for (let i = 0; i < questions.length; i++) {
                questions[i].question = `${i + 1}. ${questions[i].question}`; // Adding the number to the question
            }
        }

        function showModalAfterDelay() {
            var modalCheckbox = document.getElementById('modal-1');
            modalCheckbox.checked = true;
        }

        // Function to scroll the container to the top
function scrollContainerTop() {
    var container = document.querySelector('.container-questions');
    container.scrollTop = 0;
}


function scrollContainerBottom() {
    var container = document.querySelector('.container-questions');
    container.scrollTop = container.scrollHeight;
}

document.querySelector('.container-questions').onscroll = function() {scrollFunction()};

function scrollFunction() {
    var container = document.querySelector('.container-questions');
    if (container.scrollTop > 0) {
        document.getElementById("scrollUpBtn").style.display = "block";
    } else {
        document.getElementById("scrollUpBtn").style.display = "none";
    }

    if (container.scrollHeight - container.scrollTop === container.clientHeight) {
        document.getElementById("scrollDownBtn").style.display = "none";
    } else {
        document.getElementById("scrollDownBtn").style.display = "block";
    }
}

function ToggleDayNight(){
    let isChecked = document.querySelector('.input').checked;
    nigthAndDay(isChecked);
   
}




function nigthAndDay(nightAndDay){
    bodyElement = document.body;
    let panelBody = document.getElementById('all-panel');
    let timerLabel = document.getElementById('timerLabel');
    let timer = document.getElementById('timerDivLabel');
    let timerLabel2 = document.getElementById('timerLabel2');
    let timer2 = document.getElementById('timerDivLabel2');
    let archiDictums = document.getElementById('archiDictums');
    let timerLabel3 = document.getElementById('timerLabel3');
    let timer3 = document.getElementById('timerDivLabel3');
    if(nightAndDay){
    timerLabel.style.color = "white";
    timer.style.color = "white";
    timerLabel2.style.color = "white";
    timer2.style.color = "white";
    timer3.style.color = "white";
    archiDictums.style.color = "white";
    timerLabel3.style.color = "white";
    
    bodyElement.style.backgroundColor = "black";
    panelBody.style.backgroundColor = "black";    
    }else{
    timerLabel.style.color = "black";
    timer.style.color = "black";
    timerLabel2.style.color = "black";
    timer2.style.color = "black";
    timer3.style.color = "black";
    bodyElement.style.backgroundColor = "white";
    panelBody.style.backgroundColor = "white"; 
    archiDictums.style.color = "black";
    timerLabel3.style.color = "black";
    }
}