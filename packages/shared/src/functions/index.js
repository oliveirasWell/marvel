/**
 * @function isRequired
 * @description In a function, when an argument is not provided, throws an exception
 * @param {string} argumentName
 *
 * @example
 * // function declaration
 * function textToUpper ( text = isRequired("text") ) {
 *   return text.toUpper()
 * }
 *
 * // function use
 * textToUpper() // will throw an exception
 */
export function isRequired(argumentName) {
  throw new Error(`${argumentName} is a required argument.`);
}

/**
 * @function textToUpper
 * @description A function that returns uppercase text input
 * @param {string} text
 *
 * @example
 * textToUpper('well') /this will return 'WELL'
 */
export function textToUpper(text = isRequired('text')) {
  return text && text.toUpperCase();
}
