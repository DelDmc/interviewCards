import { questions } from "./data/questions.js";
import { addFileToLocalStorage, parseDataFromLocalStorage, updateQuestionDataInStorage } from "./utils/localStorage.js";
import { changeButtonState, displayCards, displayFilteredCards } from "./views/card.js";
import { filterByNeedToLearnStatus, addNewQuestion, addIdxToQuestion } from "./data/dataOperations.js";

const dataFileName = "questions";
addIdxToQuestion(questions);
addFileToLocalStorage(questions, dataFileName);

const dataSet = parseDataFromLocalStorage(dataFileName);
const addQuestionButton = document.getElementById("addButton");
const filterCheckBox = document.getElementById("showNeedToLearn");
const checklist = document.getElementById("checklist");

addQuestionButton.addEventListener("click", function () {
        addNewQuestion(dataSet);
        displayFilteredCards(filterCheckBox, dataSet);
    });

filterCheckBox.addEventListener("click", function () {
    displayFilteredCards(filterCheckBox, dataSet);
});

checklist.addEventListener('click', function (event) {
    changeButtonState(event, dataSet);
    updateQuestionDataInStorage(dataSet, dataFileName);
    displayFilteredCards(filterCheckBox, dataSet);
});

displayCards(dataSet);
