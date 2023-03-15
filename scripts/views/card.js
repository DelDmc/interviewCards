import { updateQuestionDataInStorage }  from "../utils/localStorage.js";

export function fillUpHTMLCard (questionData, statusState, questionId){
    const questionText = questionData.text;

    const subquestions = addSubQuestion (questionData);
    const questionCardHTML = `
    <div class="panel-tabs is-desktop is-centered is-flex-wrap-wrap">
        <div class="column is-8">
            <div class="card">
                <header class="card-header has-background-grey-lighter has-text-centered">
                    <p class="card-header-title ">
                        Question: ${questionId + 1}
                    </p>
                </header>
                <div class="card-content">
                    <div class="content is-size-4">
                        ${questionText}
                    </div>
                    ${subquestions? subquestions: ""}
                </div>
                <div class="panel-tabs">
                    ${statusState.OK}
                    ${statusState.NOK}
                </div>
            </div>
        </div>
    </div>
`;
    return questionCardHTML;
}

function addSubQuestion (questionData) {
    if (questionData.subquestions && questionData.subquestions.length > 0){
        const subquestions = questionData.subquestions;
        let resultSubQuestionsHTML = '';
        subquestions.forEach(
            (subquestionData, idx) => {
                resultSubQuestionsHTML +=`<div class="content pl-5"> ● ${subquestionData.text}</div>`;
            }
        );
        return resultSubQuestionsHTML;
    }
}

export function setQuestionStatusTag (questionData, questionId){
    if (questionData.status === "OK"){

        return {
            OK :`<button id="ok-${questionId}" class="button is-success is-outlined ml-5 mr-5 mb-5 is-hovered">Learned<span class="ml-3"><ion-icon name="checkmark-circle-outline"></ion-icon></span></button>`,
            NOK : `<button id="nok-${questionId}" class="button is-danger is-outlined ml-5 mr-5 mb-5" >Need to learn<span class="ml-3"><ion-icon name="close-circle-outline"></ion-icon></span></button>`
        };
    } else if (questionData.status === "NOK"){

        return {
            OK :`<button id="ok-${questionId}" class="button is-success is-outlined ml-5 mr-5 mb-5 ">Learned<span class="ml-3"><ion-icon name="checkmark-circle-outline"></ion-icon></span></button>`,
            NOK : `<button id="nok-${questionId}" class="button is-danger is-outlined ml-5 mr-5 mb-5 is-hovered" >Need to learn<span class="ml-3"><ion-icon name="close-circle-outline"></ion-icon></span></button>`
        };
    }
}

// export function changeButtonState (questionData, questionId, data, filename){
//     const learnedButton = document.getElementById(`status-ok-btn-${questionId}`);
//     const needToLearnButton = document.getElementById(`status-nok-btn-${questionId}`);

//     learnedButton.addEventListener('click', () => {
//         questionData.status = 'OK';
//         learnedButton.classList.add('is-hovered');
//         needToLearnButton.classList.remove('is-hovered');
//         updateQuestionDataInStorage(data, filename);

//     });
//     needToLearnButton.addEventListener('click', () => {
//         questionData.status = 'NOK';
//         learnedButton.classList.remove('is-hovered');
//         needToLearnButton.classList.add('is-hovered');
//         updateQuestionDataInStorage(data, filename);

//     });
// }

export function createHTMLCardElement (questionData, questionId) {
    const statusState = setQuestionStatusTag(questionData, questionId);
    return fillUpHTMLCard (questionData, statusState, questionId);
}


export function changeButtonState (questionData, filename){
    const checklist = document.getElementById("checklist");
    checklist.addEventListener('click', function(event){
        console.log(event.target.id);
        const arr = event.target.id.split("-");
        const btnID =arr[1];
        console.log(btnID);
        if (arr[0]==="ok"){
            questionData[btnID].status = "OK";
            const NOKbtn = document.getElementById("nok-"+btnID);
            NOKbtn.classList.remove("is-hovered");
            event.target.classList.add("is-hovered");
            updateQuestionDataInStorage(questionData, filename);
        }
        if (arr[0]==="nok"){
            questionData[btnID].status = "NOK";
            const OKbtn = document.getElementById("ok-"+btnID);
            OKbtn.classList.remove("is-hovered");
            event.target.classList.add("is-hovered");
            updateQuestionDataInStorage(questionData, filename);
        }
    });
}