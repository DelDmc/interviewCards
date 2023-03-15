import { questions } from "./data/questions.js";
import { addFileToLocalStorage, retrieveDataFromLocalStorage} from "./utils/localStorage.js";
import { createHTMLCardElement, changeButtonState} from "./views/card.js";
import { openModal, closeModal} from "./views/modal.js";

let dataDisplayValue = 0;

const dataFileName = "questions";
addFileToLocalStorage(questions, dataFileName);

const data = retrieveDataFromLocalStorage(dataFileName);
let storedQuestions;

switch (dataDisplayValue){
    case 0:{
        storedQuestions = data.all;
        break;
    }
    case 1:{
        storedQuestions = data.withLearnedStatus;
        break;
    }
    case 2:{
        storedQuestions = data.withNeedToLearnStatus;
        break;
    }
}

displayQuestions();

const panelBlock = document.getElementById("panelBlock");
panelBlock.addEventListener("click", function (event){
    if (event.target.id === "openModal") {
        openModal();
    }
    if (event.target.id === "closeModal") {
        closeModal();
    }
});

function displayQuestions (){
    storedQuestions.forEach(
        (questionData, idx) => {
            document.getElementById("checklist")
                    .insertAdjacentHTML(
                        'beforeend', 
                        createHTMLCardElement(questionData, idx)
                        );
                    });
                }
                 
changeButtonState(storedQuestions, dataFileName);


