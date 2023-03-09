import { updateQuestionDataInStorage }  from "../utils/localStorage.js";

export function fillUpHTMLCard (questionData, statusState){
    const questionId = questionData.id;
    const questionText = questionData.text;

    const subquestions = addSubQuestion (questionData);
    const cardHTML = `
        <div class="card mb-5 mt-3">
            <header class="card-header has-background-grey-lighter has-text-centered">
                <p class="card-header-title ">
                    Question ID: ${questionId}
                </p>
            </header>
            <div class="card-content">
                <div class="content is-size-4">
                    ${questionText}
                </div>
                 ${subquestions? subquestions: ""}
            </div>
            <div class="is-inline-flex">
                ${statusState.OK}
                ${statusState.NOK}
            </div>
        </div>
        `;
    return cardHTML;
}

function addSubQuestion (questionData) {
    if (questionData.subquestions && questionData.subquestions.length > 0){
        const subquestions = questionData.subquestions;
        let html = '';
        subquestions.forEach(
            subquestionData => {
                html +=`<div class="content pl-5">${subquestionData.id} ${subquestionData.text}</div>`;
            }
        );
        return html;
    }
}

export function setQuestionStatusTag (questionData){
    if (questionData.status === "OK"){

        return {
            OK :`<button id="status-ok-btn-${questionData.id}" class="button is-success is-outlined ml-5 mr-5 mb-5 is-hovered">Learned<span class="ml-3"><ion-icon name="checkmark-circle-outline"></ion-icon></span></button>`,
            NOK : `<button id="status-nok-btn-${questionData.id}" class="button is-danger is-outlined ml-5 mr-5 mb-5" >Need to learn<span class="ml-3"><ion-icon name="close-circle-outline"></ion-icon></span></button>`
        };
    } else if (questionData.status === "NOK"){

        return {
            OK :`<button id="status-ok-btn-${questionData.id}" class="button is-success is-outlined ml-5 mr-5 mb-5 ">Learned<span class="ml-3"><ion-icon name="checkmark-circle-outline"></ion-icon></span></button>`,
            NOK : `<button id="status-nok-btn-${questionData.id}" class="button is-danger is-outlined ml-5 mr-5 mb-5 is-hovered" >Need to learn<span class="ml-3"><ion-icon name="close-circle-outline"></ion-icon></span></button>`
        };
    }
}

export function changeButtonState (questionData, data, filename){
    const learnedButton = document.getElementById(`status-ok-btn-${questionData.id}`);
    const needToLearnButton = document.getElementById(`status-nok-btn-${questionData.id}`);

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

export function createHTMLCardElement (questionData) {
    const statusState = setQuestionStatusTag(questionData);
    return fillUpHTMLCard (questionData, statusState);
}
