
let time3 = document.getElementById('time3');    
let startExam3 = document.getElementById('start-quiz3');
let submitQuiz3 = document.getElementById('submit-quiz3');
let timer3 = document.getElementById('timer3');
let goodJobResult3 = document.getElementById('goodJobResult3');
let timerInterval3;
let timeRemaining3;


function startQuiz3() {
    const selectedTime = document.getElementById('timer3').value;
    if (!selectedTime) {
        alert("Please select a timer duration.");
        return;
    }
    var modalCheckbox = document.getElementById('modal-3');
    modalCheckbox.checked = false;
   
    timeRemaining3 = parseInt(selectedTime);
    time3.textContent = formatTime(timeRemaining3); 
    startExam3.style.display = 'none';
    submitQuiz3.style.display = 'block';
    const resultsContainer = document.getElementById('results3');
    resultsContainer.style.display = 'none';
    buildQuiz3();
    startTimer3();
    }


    
    function startTimer3() {
        timerInterval3 = setInterval(() => {
           
    
            timeRemaining3--;
            time3.innerHTML = formatTime(timeRemaining3); 
            if (timeRemaining3 <= 0) {
                clearInterval(timerInterval3);
                showResultsDictums();
            }
        }, 1000);
        }

        function buildQuiz3() {
            shuffleQuestions3(); // Shuffle the questions
            const quizContainer3 = document.getElementById('quiz3');
            const output = [];
        
            questions3.forEach((currentQuestion, questionNumber) => {
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
                        <ul class="answers3">${answers.join('')}</ul>
                    </div>`
                );
            });
        
            quizContainer3.innerHTML = output.join('');
        }


        function showResultsDictums() {
            clearInterval(timerInterval3);
            const answerContainers = document.querySelectorAll('.answers3');
            let numCorrect = 0;
            let unansweredQuestionIndex = -1; // Initialize index of unanswered question
            let incorrectAnswers = []; // Array to store incorrect answers
        
            questions3.forEach((currentQuestion, questionNumber) => {
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
           
            const resultsContainer = document.getElementById('results3');
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = `You got ${numCorrect} out of ${questions3.length} correct.`;
            if (numCorrect === questions.length) {
                resultsContainer.innerHTML += "<br>Congratulations! You passed the exam.";
            } else {
                resultsContainer.innerHTML += "<br>Sorry, you did not pass the exam.";
            }
        
             // Display incorrect answers
             const wrongAnswerContainer = document.getElementById('wrongAnswer3');
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
        
            goodJobResult3.innerHTML = resultsContainer.innerHTML;
            showModalAfterDelay3();
            startExam3.style.display = 'block'; // Display restart button
            document.getElementById('submit-quiz3').style.display = 'none'; // Hide submit button
        
            
        }
        
        

        function showResults3() {
            const answerContainers = document.querySelectorAll('.answers3');
            let unansweredQuestions = [];
            let incorrectAnswers = []; // Array to store incorrect answers
            let numCorrect = 0;
        
            questions3.forEach((currentQuestion, questionNumber) => {
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
            calculateScore3();
            const passingGrade = Math.ceil(questions.length * 0.6);
            const pass = numCorrect >= passingGrade;
        
            // Display the results
            const resultsContainer = document.getElementById('results3');
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = `You got ${numCorrect} out of ${questions.length} correct.`;
            if (pass) {
                resultsContainer.innerHTML += "<br>Congratulations! You passed the exam.";
            } else {
                resultsContainer.innerHTML += "<br>Sorry, you did not pass the exam.";
            }
        
            // Display incorrect answers
            const wrongAnswerContainer = document.getElementById('wrongAnswer3');
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
        
           
        
            goodJobResult3.innerHTML = resultsContainer.innerHTML;
            showModalAfterDelay3();
            document.getElementById('start-quiz3').style.display = 'block'; // Display restart button
            document.getElementById('submit-quiz3').style.display = 'none'; // Hide submit button
            clearInterval(timerInterval);
        }


        function calculateScore3() {
            const answerContainers = document.querySelectorAll('.answers3');
            let numCorrect = 0;
        
            questions3.forEach((currentQuestion, questionNumber) => {
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

        function showModalAfterDelay3() {
            var modalCheckbox = document.getElementById('modal-3');
            modalCheckbox.checked = true;
        }


        function shuffleQuestions3() {
            // Reset question numbers
            for (let i = 0; i < questions3.length; i++) {
                questions3[i].question = questions3[i].question.replace(/^\d+\.\s/, ''); // Remove existing number
            }
        
            for (let i = questions3.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [questions3[i], questions3[j]] = [questions3[j], questions3[i]];
            }
        
            // Update question numbers after shuffling
            for (let i = 0; i < questions3.length; i++) {
                questions3[i].question = `${i + 1}. ${questions3[i].question}`; // Adding the number to the question
            }
        }


                // Function to scroll the container to the top
function scrollContainerTop3() {
    var container = document.querySelector('.container-questions3');
    container.scrollTop = 0;
}


function scrollContainerBottom3() {
    var container = document.querySelector('.container-questions3');
    container.scrollTop = container.scrollHeight;
}


document.querySelector('.container-questions3').onscroll = function() {scrollFunction3()};

function scrollFunction3() {
    var container = document.querySelector('.container-questions3');
    if (container.scrollTop > 0) {
        document.getElementById("scrollUpBtn3").style.display = "block";
    } else {
        document.getElementById("scrollUpBtn3").style.display = "none";
    }

    if (container.scrollHeight - container.scrollTop === container.clientHeight) {
        document.getElementById("scrollDownBtn3").style.display = "none";
    } else {
        document.getElementById("scrollDownBtn3").style.display = "block";
    }
}