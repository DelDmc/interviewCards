import {addNewQuestionToLocalStorage} from "../utils/localStorage.js";


export function filterByNeedToLearnStatus (questions){
    const filteredQuestions = questions.filter((question) => question.status === false);
    return filteredQuestions;
}

export function addNewQuestion (data) {
    const textElement = document.getElementById("questionText");
    const questionText = textElement.value;
    const newQuestionId = data.length;
    let questionSample = {
        text: "",
        status: false,
        id: newQuestionId,
    };
    if (questionText.trim() !== ""){
        questionSample.text = questionText;
        addNewQuestionToLocalStorage(data, questionSample);
        textElement.value = "";
    } else {
        alert("Too short");
    }
}

export function addIdxToQuestion(questions){
    questions.forEach(
        function(question, idx){
            if (!question.id) {
                question.id = idx;
            }
        });
    }