export function fillUpHTMLCard (questionData, statusState){
    const questionText = questionData.text;
    const subquestions = addSubQuestion (questionData);
    const learnedBtn = `<button class="button is-success is-outlined mb-5 is-hovered">Learned<span class="ml-3"><ion-icon name="checkmark-circle-outline"></ion-icon></span></button>`; 
    const needToLearnBtn = `<button class="button is-danger mb-5 is-hovered" >Need to learn<span class="ml-3"><ion-icon name="close-circle-outline"></ion-icon></span></button>`;
    const questionCardHTML = `
            <div class="column is-centered has-text-centered is-8 is-offset-2">
                <div class="card is-6 is-offset-3">
                    <div class="card-content">
                        <div class="content is-size-4">
                            ${questionText}
                        </div>
                        ${subquestions? subquestions: ""}
                    </div>
                    <div class="panel-tabs">
                        ${questionData.status ? learnedBtn : needToLearnBtn}
                    </div>
                </div>
            </div>
`;
    return questionCardHTML;
}

export function changeButtonState (event){
        if (event.target.classList.contains('is-danger')) {
            event.target.className = "button is-success is-outlined mb-5 is-hovered";
            event.target.textContent = "Learned";

        } else if (event.target.classList.contains('is-success')) {
            event.target.className = "button is-danger mb-5 is-hovered";
            event.target.textContent = "Need to Learn";
        }
    }

export function displayCards (questionsDataSet){
    questionsDataSet.forEach(
        (questionData) => {
            document.getElementById("checklist")
                    .insertAdjacentHTML(
                        'beforeend', 
                        fillUpHTMLCard (questionData)
                        );
                    });
                }

function addSubQuestion (questionData) {
    if (questionData.subquestions && questionData.subquestions.length > 0){
        const subquestions = questionData.subquestions;
        let resultSubQuestionsHTML = '';
        subquestions.forEach(
            (subquestionData) => {
                resultSubQuestionsHTML +=`<div class="content pl-5"> ● ${subquestionData.text}</div>`;
            }
        );
        return resultSubQuestionsHTML;
    }
}