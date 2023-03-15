import { filterByLearnedStatus, filterByNeedToLearnStatus } from "../data/sortQuestions.js";

export function addFileToLocalStorage (data, filename) {
    if (!localStorage.getItem(filename)){
        const dataString = JSON.stringify(data);
        localStorage.setItem(filename, dataString);
    }
}

export function parseDataFromLocalStorage (data) {
    return JSON.parse(localStorage.getItem(data));
}

export function updateQuestionDataInStorage (data, filename){
    localStorage.setItem(filename, JSON.stringify(data));
}

export function setDataDisplayValue(value) {
    localStorage.setItem("dataDisplayValue", value);
}

export function retrieveDataFromLocalStorage(data){
    const questions = parseDataFromLocalStorage(data);
    return {
        all: questions,
        withLearnedStatus: filterByLearnedStatus(questions),
        withNeedToLearnStatus: filterByNeedToLearnStatus (questions)
    };
}