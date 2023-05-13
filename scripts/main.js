import {questions} from './data/questions.js';
import {addFileToLocalStorage, parseDataFromLocalStorage, updateQuestionDataInStorage} from './utils/localStorage.js';
import {changeButtonState, displayCards, displayFilteredCards} from './views/card.js';
import {addNewQuestion, addIdxToQuestion} from './data/dataOperations.js';

/**
 * The filename used for storing and retrieving data from local storage.
 * @type {string}
 */
const dataFileName = 'questions';

// Add indices to questions
addIdxToQuestion(questions);

// Store questions data in local storage
addFileToLocalStorage(questions, dataFileName);

// Retrieve questions data from local storage
const dataSet = parseDataFromLocalStorage(dataFileName);

// DOM elements
const addQuestionButton = document.getElementById('addButton');
const filterCheckBox = document.getElementById('showNeedToLearn');
const checklist = document.getElementById('checklist');

// Event listeners
addQuestionButton.addEventListener('click', function() {
  addNewQuestion(dataSet);
  displayFilteredCards(filterCheckBox, dataSet);
});

filterCheckBox.addEventListener('click', function() {
  displayFilteredCards(filterCheckBox, dataSet);
});

checklist.addEventListener('click', function(event) {
  changeButtonState(event, dataSet);
  updateQuestionDataInStorage(dataSet, dataFileName);
  displayFilteredCards(filterCheckBox, dataSet);
});

// Display initial set of question cards
displayCards(dataSet);

