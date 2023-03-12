import { questions } from "./data/questions.js";
import { addFileToLocalStorage, parseDataFromLocalStorage} from "./utils/localStorage.js";
import { createHTMLCardElement, changeButtonState} from "./views/card.js";
import { openModal, closeModal} from "./views/modal.js";


const dataFileName = "questions";
addFileToLocalStorage(questions, dataFileName);
const storedQuestions = parseDataFromLocalStorage(dataFileName);

storedQuestions.forEach(
    (questionData, idx) => {
        document.getElementById("checklist")
                .insertAdjacentHTML(
                    'beforeend', 
                    createHTMLCardElement(questionData, idx)
                    );
                });

storedQuestions.forEach(
    (questionData, idx)  => {
        changeButtonState(questionData, idx, storedQuestions, dataFileName);    
});

const panelBlock = document.getElementById("panelBlock");
panelBlock.addEventListener("click", function (event){
    if (event.target.id === "openModal") {
        openModal();
    }
    if (event.target.id === "closeModal") {
        closeModal();
    }
});


