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


export function addNewQuestionToLocalStorage(data, newQuestion){
    data.push(newQuestion);
    localStorage.setItem("questions", JSON.stringify(data));
}

