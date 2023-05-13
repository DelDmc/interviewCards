/**
 * Adds a file to the local storage if it doesn't already exist.
 * @param {object} data - The data to be stored.
 * @param {string} filename - The name of the file.
 */
export function addFileToLocalStorage(data, filename) {
  if (!localStorage.getItem(filename)) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(filename, dataString);
  }
}

/**
   * Parses and retrieves data from the local storage for a specific file.
   * @param {string} filename - The name of the file.
   * @return {object} The parsed data from the local storage.
   */
export function parseDataFromLocalStorage(filename) {
  return JSON.parse(localStorage.getItem(filename));
}

/**
   * Updates the question data in the local storage for a specific file.
   * @param {object} data - The updated data.
   * @param {string} filename - The name of the file.
   */
export function updateQuestionDataInStorage(data, filename) {
  localStorage.setItem(filename, JSON.stringify(data));
}

