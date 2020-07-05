import { filterResults } from './filterResults';
import resultsJson from './source.json';

const results = JSON.parse(JSON.stringify(resultsJson));

test('filter itens by characters', () => {
  const idsFiltered = filterResults({ filter: 'hulk', results }).map(
    comic => comic.id
  );

  const idExpected = [1158];

  expect(idsFiltered).toEqual(idExpected);
});

test('filter itens by name', () => {
  const idsFiltered = filterResults({ filter: 'marvel', results }).map(
    comic => comic.id
  );

  const idExpected = [82967, 82965, 89479, 82970, 1308];

  expect(idsFiltered).toEqual(idExpected);
});
