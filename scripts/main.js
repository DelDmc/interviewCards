import { questions } from "./data/questions.js";
import { addFileToLocalStorage, parseDataFromLocalStorage} from "./utils/localStorage.js";
import { createHTMLCardElement, changeButtonState} from "./views/card.js";


const dataFileName = "questions";
addFileToLocalStorage(questions, dataFileName);
const storedQuestions = parseDataFromLocalStorage(dataFileName);

storedQuestions.forEach(
    questionData => {
        document.getElementById("checklist")
                .insertAdjacentHTML(
                    'beforeend', 
                    createHTMLCardElement(questionData)
                    );
                });

storedQuestions.forEach(
    questionData  => {
        changeButtonState(questionData, storedQuestions, dataFileName);    
});

