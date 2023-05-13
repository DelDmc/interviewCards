import {addNewQuestionToLocalStorage} from '../utils/localStorage.js';

/**
 * Filters an array of questions by their "status" property.
 * @param {Array} questions - The array of questions to filter.
 * @return {Array} The filtered questions.
 */
export function filterByNeedToLearnStatus(questions) {
  const filteredQuestions = questions.filter((question) => question.status === false);
  return filteredQuestions;
}

/**
 * Adds a new question to the data and stores it in the local storage.
 * @param {Array} data - The data array to add the question to.
 */
export function addNewQuestion(data) {
  const textElement = document.getElementById('questionText');
  const questionText = textElement.value;
  const newQuestionId = data.length;
  const questionSample = {
    text: '',
    status: false,
    id: newQuestionId,
  };
  if (questionText.trim() !== '') {
    questionSample.text = questionText;
    addNewQuestionToLocalStorage(data, questionSample);
    textElement.value = '';
  } else {
    alert('Too short');
  }
}

/**
 * Adds an "id" property to each question in the array, if it doesn't already exist.
 * @param {Array} questions - The array of questions to add "id" property to.
 */
export function addIdxToQuestion(questions) {
  questions.forEach(function(question, idx) {
    if (!question.id) {
      question.id = idx;
    }
  });
}
