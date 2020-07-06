import { isRequired, textToUpper } from './index';

test('isRequired should throw exception', () => {
  const textItem = 'out';
  const errorMessageExpected = `${textItem} is a required argument.`;
  let errorMessage = '';

  try {
    isRequired(textItem);
  } catch (e) {
    errorMessage = e?.message;
  }

  expect(errorMessageExpected).toEqual(errorMessage);
});

test('textToUpper should throw exception when empty', () => {
  const errorMessageExpected = `text is a required argument.`;
  let errorMessage = '';

  try {
    textToUpper();
  } catch (e) {
    errorMessage = e?.message;
  }

  expect(errorMessageExpected).toEqual(errorMessage);
});
