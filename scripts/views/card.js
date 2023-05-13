import {updateQuestionDataInStorage} from '../utils/localStorage.js';

/**
 * Fills up an HTML card with question data.
 * @param {object} questionData - The question data object.
 * @param {string} statusState - The status state of the question.
 * @param {number} questionId - The ID of the question.
 * @return {string} The generated HTML card.
 */
export function fillUpHTMLCard(questionData, statusState, questionId) {
  const questionText = questionData.text;

  const subquestions = addSubQuestion(questionData);
  const questionCardHTML = `
      <div class="columns is-desktop is-centered">
          <div class="column is-8">
              <div class="card mb-5 mt-3">
                  <header class="card-header has-background-grey-lighter has-text-centered">
                      <p class="card-header-title ">
                          Question ID: ${questionId + 1}
                      </p>
                  </header>
                  <div class="card-content">
                      <div class="content is-size-4">
                          ${questionText}
                      </div>
                      ${subquestions ? subquestions : ''}
                  </div>
                  <div class="is-inline-flex">
                      ${statusState.OK}
                      ${statusState.NOK}
                  </div>
              </div>
          </div>
      </div>
  `;
  return questionCardHTML;
}

/**
 * Adds subquestions to the HTML card.
 * @param {object} questionData - The question data object.
 * @return {string} The HTML for the subquestions.
 */
function addSubQuestion(questionData) {
  if (questionData.subquestions && questionData.subquestions.length > 0) {
    const subquestions = questionData.subquestions;
    let resultSubQuestionsHTML = '';
    subquestions.forEach((subquestionData, idx) => {
      resultSubQuestionsHTML += `<div class="content pl-5"> ● ${subquestionData.text}</div>`;
    });
    return resultSubQuestionsHTML;
  }
}

/**
   * Sets the question status tag based on the question data and ID.
   * @param {object} questionData - The question data object.
   * @param {number} questionId - The ID of the question.
   * @return {object} The status state object.
   */
export function setQuestionStatusTag(questionData, questionId) {
  if (questionData.status === 'OK') {
    return {
      OK: `<button id="status-ok-btn-${questionId}" class="button is-success is-outlined ml-5 mr-5 mb-5 is-hovered">
              Learned
              <span class="ml-3">
                <ion-icon name="checkmark-circle-outline"></ion-icon>
              </span>
            </button>`,
      NOK: `<button id="status-nok-btn-${questionId}" class="button is-danger is-outlined ml-5 mr-5 mb-5" >
              Need to learn
              <span class="ml-3">
                <ion-icon name="close-circle-outline"></ion-icon>
              </span>
            </button>`,
    };
  } else if (questionData.status === 'NOK') {
    return {
      OK: `<button id="status-ok-btn-${questionId}" class="button is-success is-outlined ml-5 mr-5 mb-5 ">
            Learned
            <span class="ml-3">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
            </span>
          </button>`,
      NOK: `<button id="status-nok-btn-${questionId}" class="button is-danger is-outlined ml-5 mr-5 mb-5 is-hovered">
              Need to learn
              <span class="ml-3">
                <ion-icon name="close-circle-outline"></ion-icon>
              </span>
            </button>`,
    };
  }
}

/**
 * Changes the button state based on user interaction.
 * @param {object} questionData - The question data object.
 * @param {number} questionId - The ID of the question.
 * @param {object} data - Additional data.
 * @param {string} filename - The filename.
 */
export function changeButtonState(questionData, questionId, data, filename) {
  const learnedButton = document.getElementById(`status-ok-btn-${questionId}`);
  const needToLearnButton = document.getElementById(`status-nok-btn-${questionId}`);

  learnedButton.addEventListener('click', () => {
    questionData.status = 'OK';
    learnedButton.classList.add('is-hovered');
    needToLearnButton.classList.remove('is-hovered');
    updateQuestionDataInStorage(data, filename);
  });

  needToLearnButton.addEventListener('click', () => {
    questionData.status = 'NOK';
    learnedButton.classList.remove('is-hovered');
    needToLearnButton.classList.add('is-hovered');
    updateQuestionDataInStorage(data, filename);
  });
}

/**
 * Creates an HTML card element based on question data.
 * @param {object} questionData - The question data object.
 * @param {number} questionId - The ID of the question.
 * @return {string} The generated HTML card element.
 */
export function createHTMLCardElement(questionData, questionId) {
  const statusState = setQuestionStatusTag(questionData, questionId);
  return fillUpHTMLCard(questionData, statusState, questionId);
}
