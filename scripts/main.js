import { questions } from "./data/questions.js";
import { addFileToLocalStorage, parseDataFromLocalStorage, updateQuestionDataInStorage } from "./utils/localStorage.js";
import { changeButtonState, displayCards } from "./views/card.js";
import { filterByNeedToLearnStatus, addNewQuestion } from "./data/dataOperations.js";

const dataFileName = "questions";
addFileToLocalStorage(questions, dataFileName);
let dataSet = parseDataFromLocalStorage(dataFileName);

const panelBlock = document.getElementById("headerPanel");
panelBlock.addEventListener("click", function (event){
    if (event.target.id === "addButton") {
        dataSet = parseDataFromLocalStorage(dataFileName);

        // TODO: There is no use to call loop one more time, better to add just a new card
        addNewQuestion (dataSet);
    }
    if (event.target.checked) {
        checklist.innerHTML = "";
        dataSet = filterByNeedToLearnStatus(dataSet);
        displayCards(dataSet);
    } else {
        checklist.innerHTML = "";
        dataSet = parseDataFromLocalStorage(dataFileName);
        displayCards(dataSet);
    }
});

const checklist = document.getElementById("checklist");           
checklist.addEventListener('click', function(event){
    dataSet = parseDataFromLocalStorage(dataFileName);
    changeButtonState(event, dataSet, dataFileName);
    updateQuestionDataInStorage(dataSet, dataFileName);
});

displayCards(dataSet);