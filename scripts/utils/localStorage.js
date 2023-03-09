export function addFileToLocalStorage (data, filename) {
    if (!localStorage.getItem(filename)){
        const dataString = JSON.stringify(data);
        localStorage.setItem(filename, dataString);
    }
}

export function parseDataFromLocalStorage (filename) {
    return JSON.parse(localStorage.getItem(filename));
}

export function updateQuestionDataInStorage (data, filename){
    localStorage.setItem(filename, JSON.stringify(data));
    console.log(data);
}
