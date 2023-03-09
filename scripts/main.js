import { questions } from "./data/questions.js";
import { addFileToLocalStorage, parseDataFromLocalStorage} from "./utils/localStorage.js";
import { createHTMLCardElement, changeButtonState} from "./views/card.js";


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

