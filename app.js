// import functions and grab DOM elements

import { countsAsAYes } from "./ultis.js";
import { countsAsANo } from "./ultis.js"

const quizButton = document.getElementById('quiz-button');
const answerArea = document.getElementById('answer-area');

quizButton.addEventListener('click', () => {
    alert('Hello! This will not be easy');
    
const confirmation = confirm('Want to take my test?')

if (!confirmation) {
    return;
}
 
const firstName = prompt('what is your first name?');
const lastName = prompt('what is your last name?');
const firstAnswer = prompt('Are there roughly 60 cat breeds?');

let correctAnswers = 0;

if (countsAsAYes(firstAnswer)) {
    correctAnswers++;
} 


const secondAnswer = prompt('Is a green zebra a type of cat?');



if (countsAsANo(secondAnswer)) {
    correctAnswers++;
} 

const resultsString = `Hey ${firstName} ${lastName}
You got ${correctAnswers} answer correct! `;

answerArea.textContent = resultsString;

});


// initialize state

// set event listeners to update state and DOM