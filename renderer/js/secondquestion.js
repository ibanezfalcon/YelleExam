let time2 = document.getElementById('time2');
    let startExam2 = document.getElementById('start-quiz2');
    let submitQuiz2 = document.getElementById('submit-quiz2');
    let goodJobResult2 = document.getElementById('goodJobResult2');

    
    let timerInterval2;
    let timeRemaining2;

    function startQuiz2() {
    scrollContainerTop();
    const selectedTime2 = document.getElementById('timer2').value;
    if (!selectedTime2) {
        alert("Please select a timer duration.");
        return;
    }
    var modalCheckbox2 = document.getElementById('modal-2');
    modalCheckbox2.checked = false;
   
    timeRemaining2 = parseInt(selectedTime2);
    time2.textContent = formatTime(timeRemaining2); 
    startExam2.style.display = 'none';
    submitQuiz2.style.display = 'block';
    const resultsContainer2 = document.getElementById('results2');
    resultsContainer2.style.display = 'none';
    buildQuiz2();
    startTimer2();
    }

    function startTimer2() {
      timerInterval2 = setInterval(() => {
       

        timeRemaining2--;
        time2.innerHTML = formatTime(timeRemaining2); 
        if (timeRemaining2 <= 0) {
            clearInterval(timerInterval2);
            showResultsForImages2();
        }
    }, 1000);
    }



function buildQuiz2() {
    shuffleQuestions2(); // Shuffle the questions
    const quizContainer2 = document.getElementById('quiz2');
    const output = [];

    questions2.forEach((imageSet, imageIndex) => {
        output.push(`<img src="./Images/${imageSet.image}" alt="Image ${imageIndex + 1}" id="imgDisplay" />`);
        imageSet.questions.forEach((currentQuestion, questionIndex) => {
            const answers = [];
            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<li>
                        <label>
                            <input type="radio" name="question${imageIndex}_${questionIndex}" value="${letter}">
                            <span class="radio-custom"></span>
                            ${letter}. ${currentQuestion.answers[letter]}
                        </label>
                    </li>`
                );
            }
            output.push(
                `<div class="question">
                    <h2>${currentQuestion.question}</h2>
                    <ul class="answers2">${answers.join('')}</ul>
                </div>`
            );
        });
    });

    quizContainer2.innerHTML = output.join('');
}












function showResultsForImages() {
    const answerContainers = document.querySelectorAll('.answers2');
    let unansweredQuestions = [];
    let incorrectAnswers = []; // To store incorrect answers

    questions2.forEach((imageSet, imageIndex) => {
        imageSet.questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = document.querySelector(`input[name=question${imageIndex}_${questionNumber}]:checked`);
            const userAnswer = answerContainer ? answerContainer.value : undefined;

            if (!userAnswer) {
                unansweredQuestions.push(questionNumber);
            } else if (userAnswer !== currentQuestion.correctAnswer) {
                incorrectAnswers.push({
                question: currentQuestion.question,
                correctAnswer: currentQuestion.answers[currentQuestion.correctAnswer],
                userAnswer: currentQuestion.answers[userAnswer]
            });
            }
        });
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
    calculateScore2();
    const totalQuestions = questions2.reduce((acc, imageSet) => acc + imageSet.questions.length, 0);
    const numCorrect = totalQuestions - incorrectAnswers.length;
    const passingGrade = Math.ceil(totalQuestions * 0.6);
    const pass = numCorrect >= passingGrade;

    // Display the results
    const resultsContainer = document.getElementById('results2');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${totalQuestions} correct.`;
    if (pass) {
        resultsContainer.innerHTML += "<br>Congratulations! You passed the exam.";
    } else {
        resultsContainer.innerHTML += "<br>Sorry, you did not pass the exam.";
    }

    // Display incorrect answers
    const wrongAnswerContainer = document.getElementById('wrongAnswer2');
    wrongAnswerContainer.style.display = 'block';
    wrongAnswerContainer.innerHTML = '<h3>Incorrect Answers:</h3>';
    incorrectAnswers.forEach((incorrect) => {
        wrongAnswerContainer.innerHTML += 
        `  <div class="incorrect-answer">
                <p><strong>Question:</strong> ${incorrect.question}</p>
                <p><strong>Your Answer:</strong> <span class="wrong">${incorrect.userAnswer}</span></p>
                <p><strong>Correct Answer:</strong> <span class="correct2">${incorrect.correctAnswer}</span></p>
            </div>  `;
    });

    goodJobResult2.innerHTML = resultsContainer.innerHTML;
    showModalAfterDelay2();
    document.getElementById('start-quiz2').style.display = 'block'; // Display restart button
    document.getElementById('submit-quiz2').style.display = 'none'; // Hide submit button
    clearInterval(timerInterval2);
}



function showResultsForImages2() {
    const answerContainers = document.querySelectorAll('.answers2');
    let unansweredQuestions = [];
    let incorrectAnswers = []; // To store incorrect answers
    let numCorrect = 0;
    questions2.forEach((imageSet, imageIndex) => {
        imageSet.questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[imageIndex * imageSet.questions.length + questionNumber];
            const selector = `input[name=question${imageIndex}_${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainer.querySelector(`input[value=${currentQuestion.correctAnswer}]`).parentNode.classList.add('correct');
            } else {
                if (userAnswer) {
                    answerContainer.querySelector(`input[value=${userAnswer}]`).parentNode.classList.add('incorrect');
                    incorrectAnswers.push({
                question: currentQuestion.question,
                correctAnswer: currentQuestion.answers[currentQuestion.correctAnswer],
                userAnswer: currentQuestion.answers[userAnswer]
    });

                } else {
                    unansweredQuestions.push(questionNumber); 
                }
                answerContainer.querySelector(`input[value=${currentQuestion.correctAnswer}]`).parentNode.classList.add('correct-answer');
            }
        });
    });


    // Calculate passing grade
    // calculateScore2();
    const totalQuestions = questions2.reduce((acc, imageSet) => acc + imageSet.questions.length, 0);
    // const numCorrect = totalQuestions - incorrectAnswers.length;
    const passingGrade = Math.ceil(totalQuestions * 0.6);
    const pass = numCorrect >= passingGrade;

    // Display the results
    const resultsContainer = document.getElementById('results2');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `You got ${numCorrect} out of ${totalQuestions} correct.`;
    if (pass) {
        resultsContainer.innerHTML += "<br>Congratulations! You passed the exam.";
    } else {
        resultsContainer.innerHTML += "<br>Sorry, you did not pass the exam.";
    }

    // Display incorrect answers
    const wrongAnswerContainer = document.getElementById('wrongAnswer2');
    wrongAnswerContainer.style.display = 'block';
    wrongAnswerContainer.innerHTML = '<h3>Incorrect Answers:</h3>';
    incorrectAnswers.forEach((incorrect) => {
        wrongAnswerContainer.innerHTML += 
        `  <div class="incorrect-answer">
                <p><strong>Question:</strong> ${incorrect.question}</p>
                <p><strong>Your Answer:</strong> <span class="wrong">${incorrect.userAnswer}</span></p>
                <p><strong>Correct Answer:</strong> <span class="correct2">${incorrect.correctAnswer}</span></p>
            </div>  `;
    });

    goodJobResult2.innerHTML = resultsContainer.innerHTML;
    showModalAfterDelay2();
    document.getElementById('start-quiz2').style.display = 'block'; // Display restart button
    document.getElementById('submit-quiz2').style.display = 'none'; // Hide submit button
    clearInterval(timerInterval2);
}

function calculateScore2() {
    const answerContainers = document.querySelectorAll('.answers2');
    let numCorrect = 0;
    let unansweredQuestions = []; // Define unansweredQuestions array

    questions2.forEach((imageSet, imageIndex) => {
        imageSet.questions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[imageIndex * imageSet.questions.length + questionNumber];
            const selector = `input[name=question${imageIndex}_${questionNumber}]:checked`;
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
    });

    return numCorrect;
}


function shuffleQuestions2() {
    questions2.forEach((imageSet) => {
        // Reset question numbers
        for (let i = 0; i < imageSet.questions.length; i++) {
            imageSet.questions[i].question = imageSet.questions[i].question.replace(/^\d+\.\s/, ''); // Remove existing number
        }

        for (let i = imageSet.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imageSet.questions[i], imageSet.questions[j]] = [imageSet.questions[j], imageSet.questions[i]];
        }

        // Update question numbers after shuffling
        for (let i = 0; i < imageSet.questions.length; i++) {
            imageSet.questions[i].question = `${i + 1}. ${imageSet.questions[i].question}`; // Adding the number to the question
        }
    });
}

    function showModalAfterDelay2() {
        var modalCheckbox = document.getElementById('modal-2');
        modalCheckbox.checked = true;
    }


    // Function to scroll the container to the top
function scrollContainerTop2() {
        var container = document.querySelector('.container-questions2');
        container.scrollTop = 0;
    }

   
    function scrollContainerBottom2() {
        var container = document.querySelector('.container-questions2');
        container.scrollTop = container.scrollHeight;
    }
   
    document.querySelector('.container-questions2').onscroll = function() {scrollFunction2()};

    function scrollFunction2() {
        var container = document.querySelector('.container-questions2');
        if (container.scrollTop > 0) {
            document.getElementById("scrollUpBtn2").style.display = "block";
        } else {
            document.getElementById("scrollUpBtn2").style.display = "none";
        }

        if (container.scrollHeight - container.scrollTop === container.clientHeight) {
            document.getElementById("scrollDownBtn2").style.display = "none";
        } else {
            document.getElementById("scrollDownBtn2").style.display = "block";
        }
    }
    