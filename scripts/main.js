import { questions } from "./data/questions.js";
import { addFileToLocalStorage, parseDataFromLocalStorage, updateQuestionDataInStorage, } from "./utils/localStorage.js";
import { changeButtonState, displayCards } from "./views/card.js";
import { filterByNeedToLearnStatus, addNewQuestion, addIdxToQuestion } from "./data/dataOperations.js";

const dataFileName = "questions";
addIdxToQuestion(questions);
addFileToLocalStorage(questions, dataFileName);

const dataSet = parseDataFromLocalStorage(dataFileName);
const addQuestionButton =  document.getElementById("addButton");
const filterCheckBox = document.getElementById("showNeedToLearn");
const checklist = document.getElementById("checklist");

addQuestionButton.addEventListener("click", function (event) {
        addNewQuestion(dataSet);
        checklist.innerHTML = "";
        filterCheckBox.checked = false;
        displayCards(dataSet);
    });

filterCheckBox.addEventListener("click", function (event) {
    if (event.target.checked) {
        checklist.innerHTML = "";
        displayCards(filterByNeedToLearnStatus(dataSet));
    } else {
        checklist.innerHTML = "";
        displayCards(dataSet);
    }
});


checklist.addEventListener('click', function (event) {
    changeButtonState(event, dataSet);
    updateQuestionDataInStorage(dataSet, dataFileName);
});

displayCards(dataSet);
