import {addNewQuestionToLocalStorage} from "../utils/localStorage.js";


export function filterByNeedToLearnStatus (questions){
    const filteredQuestions = questions.filter((question) => question.status === "NOK");
    return filteredQuestions;
}

export function addNewQuestion (data) {
    const textElement = document.getElementById("questionText");
    const questionText = textElement.value;
    let questionSample = {
        text: "",
        status: "NOK",
    };
    if (questionText.trim() !== ""){
        questionSample.text = questionText;
        addNewQuestionToLocalStorage(data, questionSample);
    } else {
        alert("Too short");
    }
}

