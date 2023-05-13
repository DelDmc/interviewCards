import {filterByNeedToLearnStatus} from '../data/dataOperations.js';

/**
 * Creates an HTML card element representing a question.
 * @param {Object} questionData - The data of the question.
 * @return {string} The HTML representation of the question card.
 */
export function fillUpHTMLCard(questionData) {
  const questionText = questionData.text;
  const subquestions = addSubQuestion(questionData);
  const learnedBtn = `<button class="button is-success is-outlined mb-5 is-hovered">Learned<span class="ml-3">
                      <ion-icon name="checkmark-circle-outline"></ion-icon></span></button>`;
  const needToLearnBtn = `<button class="button is-danger mb-5 is-hovered" >Need to Learn<span class="ml-3">
                          <ion-icon name="close-circle-outline"></ion-icon></span></button>`;
  const questionCardHTML = `
            <div class="column is-centered has-text-centered is-8 is-offset-2">
                <div class="card is-6 is-offset-3">
                    <div class="card-content">
                        <div class="content is-size-4">
                            ${questionText}
                        </div>
                        ${subquestions ? subquestions : ''}
                    </div>
                    <div id="${questionData.id}" class="panel-tabs">
                        ${questionData.status ? learnedBtn : needToLearnBtn}
                    </div>
                </div>
            </div>
`;
  return questionCardHTML;
}

/**
 * Changes the state of a button and updates the corresponding question's status.
 * @param {Event} event - The click event object.
 * @param {Array} dataSet - The data set containing the questions.
 */
export function changeButtonState(event, dataSet) {
  const targetBtn = event.target;
  const questionId = targetBtn.parentElement.id;
  const question = dataSet[questionId];

  if (targetBtn.textContent === 'Need to Learn') {
    targetBtn.className = 'button is-success is-outlined mb-5 is-hovered';
    targetBtn.textContent = 'Learned';
    question.status = true;
  } else if (targetBtn.textContent === 'Learned') {
    targetBtn.className = 'button is-danger mb-5 is-hovered';
    targetBtn.textContent = 'Need to Learn';
    question.status = false;
  }
}

/**
 * Displays the question cards on the checklist element.
 * @param {Array} questionsDataSet - The data set containing the questions.
 */
export function displayCards(questionsDataSet) {
  questionsDataSet.forEach(
      (questionData, idx) => {
        document.getElementById('checklist')
            .insertAdjacentHTML(
                'beforeend',
                fillUpHTMLCard(questionData, idx),
            );
      });
}

/**
 * Displays filtered question cards based on the checkbox state.
 * @param {HTMLInputElement} checkbox - The checkbox element representing the filter option.
 * @param {Array} questionsDataSet - The data set containing the questions.
 */
export function displayFilteredCards(checkbox, questionsDataSet) {
  checklist.innerHTML = '';
  if (checkbox.checked) {
    displayCards(filterByNeedToLearnStatus(questionsDataSet));
  } else {
    displayCards(questionsDataSet);
  }
}

/**
 * Generates HTML for subquestions of a question.
 * @param {Object} questionData - The question data object.
 * @return {string} - The HTML string for the subquestions.
 */
function addSubQuestion(questionData) {
  if (questionData.subquestions && questionData.subquestions.length > 0) {
    const subquestions = questionData.subquestions;
    let resultSubQuestionsHTML = '';
    subquestions.forEach(
        (subquestionData) => {
          resultSubQuestionsHTML += `<div class="content pl-5"> ● ${subquestionData.text}</div>`;
        },
    );
    return resultSubQuestionsHTML;
  }
}

