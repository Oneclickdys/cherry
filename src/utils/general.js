export function getCode() {
  return Math.floor(Math.random() * (9999 - 1000)) + 1000;
}

export function stripHtml(value) {
  let tmp = document.createElement('DIV');
  tmp.innerHTML = value;
  return tmp.textContent || tmp.innerText || '';
}

export function percentage(partialValue, totalValue = 100) {
  return (100 * partialValue) / totalValue;
}

/**
 * La media de tiempo es entre 200 y 300 palabras por segundo.
 * Vamos con 200
 * @param {enunciado} statement
 * @returns el tiempo medio que se tarda en leer esa frase
 */
export function calculateAverageTimeToReadStatement(statement) {
  return parseInt((60 * statement.split(' ').length) / 200);
}
