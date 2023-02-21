'use strict'

const questions = [
    {
        question: 'Сколько хромосом у здорового человека?',
        answer: '46',
        type: 'prompt',
    },
    {
        question: 'Путин - хуйло?',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Сколько хромосом у Путина?',
        answer: '47',
        type: 'prompt',
    },
    {
        question: 'Сколько тупых овец в московии (в млн)?',
        answer: '144',
        type: 'prompt',
    },
    {
        question: 'Снесли ли памятник Екатерине-2 в Одессе?',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Сколько черных пакетов выделяются на одного орка?',
        answer: '1',
        type: 'prompt',
    },
    {
        question: 'На сколько вы оцениваете работу ЗСУ от 1 до 10?',
        answer: '10',
        type: 'prompt',
    },
    {
        question: 'Со скольких позиций готовилось нападение на Беларусь?',
        answer: '4',
        type: 'prompt',
    },
    {
        question: 'Нужно ли сжигать сосийский флаг?',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Поддерживаете ли вы уход иностранных компаний из московии?',
        answer: 'true',
        type: 'confirm',
    },
    {
        question: 'Считаете ли вы сосию своим домом?',
        answer: 'false',
        type: 'confirm',
    }
]

Poll(questions);

function Poll (arrayOfQuestions){
    let result = 0
    let answer
    for(i = 0; i < arrayOfQuestions.length; i++){
        answer = showCorrectTypeQuestion(arrayOfQuestions[i])
        result += checkAnswer(answer, arrayOfQuestions[i].answer)
    }
    return alert(`Вы набрали ${result} очков!`)
}
function showCorrectTypeQuestion(element){
    if(element.type === 'confirm'){
        return confirm(`${element.question}`)
    }
    else return prompt(`${element.question}`)
}
function checkAnswer(userAnswer, correctAnswer){
    if(String(userAnswer) === correctAnswer) return 10
    else return 0
}