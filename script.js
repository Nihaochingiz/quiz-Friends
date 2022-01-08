const quizContainer = document.getElementById('quiz');//Добавляем элемент квиз с нашей викториной
const resultsContainer = document.getElementById('results');//Добавляем переменную резалтс, где будем выводить результаты викторины
const submitButton = document.getElementById('submit');

//Добавляем кнопку сабмит, которая и будет дейтсвием "все, подсчет результатов"

const myQuestions = [
    {
        imgFile: 'assets/img/friends1.jpg',
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
        imgFile: 'assets/img/friends2.jpg',
        question: "Ross is allergic to which kind of fruit?",
        answers: {
            a: "Lemon",
            b: "Apple",
            c: "Kiwi",
            d: "Pomegranate"
        },
        correctAnswer: "c"
    },
    {  imgFile: 'assets/img/friends3.jpg',
        question: "Phoebe dated a scientist called David. In which Belarus city did he work?",
        answers: {
            a: "Minsk",
            b: "Grodno",
            c: "Mogilev",
            d: "Pinsk"
        },
        correctAnswer: "a"
    },
    {
        imgFile: 'assets/img/friends5.jpg',
        question: "Apart from untidiness, what annoys Monica the most?",
        answers: {
            a: " Cheesy garlic bread",
            b: "Microwave popcorn",
            c: "Canned soup",
            d: "Animals dressed like humans"
        },
        correctAnswer: "a"
    },
    {
        imgFile: 'assets/img/friends6.jpg',
        question: "Which Stephen King book did Joey hide in his freezer?",
        answers: {
            a: "Pet Sematary",
            b: "The Shining",
            c: "Carrie",
            d: "It"
        },
        correctAnswer: "b"
    },
    {
        imgFile: 'assets/img/friends7.jpg',
        question: "How many sisters does Joey have?",
        answers: {
            a: "7",
            b: "5",
            c: "2",
            d: "None"
        },
        correctAnswer: "a"
    },
    {
        imgFile: 'assets/img/friends8.jpg',
        question: " What is the name of Joeys Cabbage-Patch kid?",
        answers: {
            a: "Ken Adams",
            b: "Maurice",
            c: "Hugsy",
            d: "Alicia May Emory"
        },
        correctAnswer: "d"
    },
    {
        imgFile: 'assets/img/friends9.jpg',
        question: " Which famous actors butt does Joey play in a shower scene?",
        answers: {
            a: "Bruce Willis",
            b: "Al Pacino",
            c: "Charlton Heston",
            d: "Jeff Goldblum"
        },
        correctAnswer: "b"
    },
    {
        imgFile: 'assets/img/friends10.jpg',
        question: "What is the name of Joeys character in the commercial for opening milk cartons? ",
        answers: {
            a: "Mike",
            b: "Tommy",
            c: "Kevin",
            d: "Drake"
        },
        correctAnswer: "c"
    },
    {
        imgFile: 'assets/img/friends11.jpg',
        question: "What is Ross profession?",
        answers: {
            a: "Geologist",
            b: "Astronomer",
            c: "Palaeontologist",
            d: "Museum tour guide"
        },
        correctAnswer: "c"
    },
    {
        imgFile: 'assets/img/friends12.jpg',
        question: "Where does Ross spend the night with Emily after they first meet? ",
        answers: {
            a: "A hotel in Poughkeepsie",
            b: "A bed and breakfast in Vermont",
            c: "A bungalow in Tulsa",
            d: "A park in Atlantic City"
        },
        correctAnswer: "b"
        
    
    },
    {
        imgFile: 'assets/img/friends13.jpg',
        question: " What song does Ross monkey, Marcel, keep playing? ",
        answers: {
            a: "The Lion Sleeps Tonight by The Tokens",
            b: "Tiny Dancer by Elton John",
            c: "The Way You Looked Tonight by Tony Bennett",
            d: "Careless Whisper by George Michael"
        },
        correctAnswer: "a"
        
    
    },
    {
        imgFile: 'assets/img/friends14.jpg',
        question: " What instrument did Ross intend to play at Monica and Chandlers wedding?",
        answers: {
            a: "Keyboard",
            b: "Drunks",
            c: "Saxophone",
            d: "Bagpipes"
        },
        correctAnswer: "d"
        
    
    },
    {
        imgFile: 'assets/img/friends15.jpg',
        question: " What item does Ross purchase for himself as part of his 1999 New Years Resolutions?",
        answers: {
            a: "Digital camera",
            b: "Arcade machine",
            c: "Leather pants",
            d: "Wonder-broom"
        },
        correctAnswer: "c"
        
    
    },
    {
        imgFile: 'assets/img/friends16.jpg',
        question: "What is Chandlers middle name? ",
        answers: {
            a: "Muriel",
            b: "Nora",
            c: "Charles",
            d: "Francis"
        },
        correctAnswer: "a"
        
    
    },
    {
        imgFile: 'assets/img/friends17.jpg',
        question: "Which of Joeys sisters does Chandler kiss? ",
        answers: {
            a: "Mary Therese",
            b: "Mary Angela",
            c: "Dina",
            d: "Cookie"
        },
        correctAnswer: "b"
        
    
    },
    {
        imgFile: 'assets/img/friends18.jpg',
        question: "Which toe does Chandler lose when Monica drops the knife on his foot? ",
        answers: {
            a: "Left foot big toe",
            b: "Right foot big toe",
            c: "Right foot pinkie",
            d: "Left foot pinkie"
        },
        correctAnswer: "c"
        
    
    },
    {
        imgFile: 'assets/img/friends19.jpg',
        question: "What is the name of Chandler’s favourite Baywatch star? ",
        answers: {
            a: "Kelly Slater",
            b: "Pamela Anderson",
            c: "Nancy Valen",
            d: "Yasmine Bleeth"
        },
        correctAnswer: "d"
        
    
    },
    {
        imgFile: 'assets/img/friends20.jpg',
        question: "What does Chandler have to do to get Joey to forgive him, after having kissed Cathy?",
        answers: {
            a: "Wear blue lipstick",
            b: "Lie in a wooden box for six hours",
            c: "Furnish their apartment",
            d: "Move to Yemen"
        },
        correctAnswer: "b"
        
    
    },
    {
        imgFile: 'assets/img/friends21.jpg',
        question: "What film character did Rachel dress up as to fulfil Ross fantasy?",
        answers: {
            a: "Princess Leia",
            b: "Supergirl",
            c: "Little Bo Peep",
            d: "Cat Woman"
        },
        correctAnswer: "a"
        
    
    },
    {
        imgFile: 'assets/img/friends22.jpg',
        question: "How many pages were in the letter Rachel wrote to Ross (front and back!)?",
        answers: {
            a: "12",
            b: "8",
            c: "3",
            d: "18"
        },
        correctAnswer: "d"
        
    
    },
    {
        imgFile: 'assets/img/friends23.jpg',
        question: "What famous actor does Rachel go on date with after meeting him on a movie set?",
        answers: {
            a: "Bruce Willis",
            b: "Ben Stiller",
            c: "Jean-Claude van Damme",
            d: "Brad Pitt"
        },
        correctAnswer: "c"
        
    
    },
    {
        imgFile: 'assets/img/friends24.jpg',
        question: " What happens to Rachels boss, Joanna, the night before her promotion goes through? ",
        answers: {
            a: "She gets hit by a taxi",
            b: "She goes on a date with Chandler",
            c: "She falls down an elevator shaft",
            d: "She moves to Paris"
        },
        correctAnswer: "a"
        
    
    },
    {
        imgFile: 'assets/img/friends25.jpg',
        question: "What is the name of the hairless cat Rachel gets for herself? ",
        answers: {
            a: "Fluffy",
            b: "Mrs Whiskerson",
            c: "Chi Chi",
            d: "Mozzarella"
        },
        correctAnswer: "b"
        
    
    },
    {
        imgFile: 'assets/img/friends26.jpg',
        question: " What was the name of the ice-dancer Phoebe was married to?",
        answers: {
            a: "Duncan",
            b: "Mike",
            c: "Gary",
            d: "David"
        },
        correctAnswer: "a"
        
    
    },
    
]
/* Создаем масссив объектов answers где и будем хранить наши вопросы варианты ответов и правильный ответ*/

    


function buildQuiz(){//Создаем функцию buildQuiz, где и будет наша функция-вопрос

    const output = [];//Создаем массив output пустой
   
    myQuestions.forEach( //работаем с массивов вопросов, что я создал Метод массива forEach позволяет применить колбэк-функцию ко всем элементам массива.
        (currentQuestion, questionNumber) => {
// forEach - это альтернатива for  данный колбэк принимает три параметра   item, index, arr currentQuestion это итем, question number
// это индекс далее идет стрелочная функция       
            const answers = [];//Создаем пустой масссив answers, куда будем  перемещать вопросы
            
      // and for each available answer...
            for ( letter in currentQuestion.answers ) {// for по новому es6 для слова мы находим answers из массива объектов
                //var img = document.createElement("img");
                //img.src = myQuestions.imgFile;
                //var block = document.getElementById("image");
                //block.appendChild(img);
                answers.push(// Методом push добавляем в массив answers
                     // ...add an HTML radio button
                    `
                    <label> 
                    <input  type = "radio" name = "question${questionNumber}" value = "${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
// add this question and its answers to the output
            output.push(
                `<img src=" ${currentQuestion.imgFile}" 
                width="300" height="200">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }  // finally combine our output list into one string of HTML and put it on the page
    );
quizContainer.innerHTML = output.join('');//Помещаем в quizContainer все, что было в output, метод join, чтобы привести массив к строке
}



function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');    //метод queryselecorall возвращает статический  nodelist,
    // который содержит данный селектор, то есть селектор answers

    let numCorrect = 0;//Объявляем переменную numCorrent, куда будем добавлять правильные ответы

    myQuestions.forEach(( currentQuestion, questionNumber ) => {//повторяем конструкцию forEach
        const answerContainer  = answerContainers[questionNumber];//создаем переменную answerContainer куда переимещаем массив answerContainers, и questionnumber
        const selector = `input[name=question${questionNumber}]:checked`;//создаем переменную selector, связываем с нашими вопросами уже на странице
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;//Создаем константу ответ юзера берем первый элемент selectora, так как пользуемся методом querySelector или также может быть без ответа

      
        if(userAnswer === currentQuestion.correctAnswer) {
            numCorrect++; //если ответ юзера совпадаем с correctAnswer из массива
            
            answerContainers[questionNumber].style.color = 'lightgreen';//изменяем answerContainers на зеленый
        }


        else {
            answerContainers[questionNumber].style.color = 'red';//в противном случае меняем цвет на красный
        }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;//Добавляем в резултс контейнер на странице правильные ответы 
    // из массива myQuestions

}



buildQuiz();//Вызываем функцию buildQuiz



submitButton.addEventListener('click', showResults);//Добавляем событие на кнопку submitButton по клику


