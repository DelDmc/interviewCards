export function filterByLearnedStatus (questions){
    const filteredQuestions = questions.filter((question) => question.status === "OK");
    return filteredQuestions;
}

export function filterByNeedToLearnStatus (questions){
    const filteredQuestions = questions.filter((question) => question.status === "NOK");
    return filteredQuestions;
}
