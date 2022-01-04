const quizContainer = document.getElementById('quiz');//Добавляем элемент квиз с нашей викториной
const resultsContainer = document.getElementById('results');//Добавляем переменную резалтс, где будем выводить результаты викторины
const submitButton = document.getElementById('submit');//Добавляем кнопку сабмит, которая и будет дейтсвием "все, подсчет результатов"
const myQuestions = [
    {
        imgFile: '/assets/img/friends1.jpg',
        question: "Who was the youngest person in the Friends gang?",
        answers: {
            a: "Rachel",
            b: "Phoebe",
            c: "Joey",
            d: "Chandler"
        },
        correctAnswer: "a"
    },
    {
        question: "Ross is allergic to which kind of fruit?",
        answers: {
            a: "Lemon",
            b: "Apple",
            c: "Kiwi",
            d: "Pomegranate"
        },
        correctAnswer: "c"
    },
    {
        question: "Phoebe dated a scientist called David. In which Belarus city did he work?",
        answers: {
            a: "Minsk",
            b: "Grodno",
            c: "Mogilev",
            d: "Pinsk"
        },
        correctAnswer: "a"
    },
]
/* Создаем масссив объектов answers где и будем хранить наши вопросы варианты ответов и правильный ответ*/

function buildQuiz(){//Создаем функцию buildQuiz, где и будет наша функция-вопрос

    const output = [];//Создаем массив output пустой

    myQuestions.forEach( //работаем с массивов вопросов, что я создал Метод массива forEach позволяет применить колбэк-функцию ко всем элементам массива.
        (currentQuestion, questionNumber) => {
// forEach - это альтернатива for         
            const answers = [];//Создаем пустой масссив answers, куда будем  перемещать вопросы

            for ( letter in currentQuestion.answers) {

                answers.push(
                    
                    `<label>
                    
                    <input  type = "radio" name = "question${questionNumber}" value = "${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );
quizContainer.innerHTML = output.join('');
}



function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');    

    let numCorrect = 0;

    myQuestions.forEach(( currentQuestion, questionNumber ) => {
        const answerContainer  = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;

            answerContainers[questionNumber].style.color = 'lightgreen';
        }


        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

}


buildQuiz();


submitButton.addEventListener('click', showResults);


