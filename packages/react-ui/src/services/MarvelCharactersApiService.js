import { ROOT_MARVEL_API_URL } from '../constants/apiConstants';

const getCharactersList = ({ nameStartsWith, page = 0, limit = 20 }) =>
  `${ROOT_MARVEL_API_URL}/characters?nameStartsWith=${nameStartsWith}&limit=${limit}&offset=${
    page * limit
  }&apikey=${process.env.REACT_APP_API_PUBLIC_KEY}`;

export class MarvelCharactersApiService {
  static getPaginated(nameStartsWith, page, limit) {
    return fetch(getCharactersList({ nameStartsWith, page, limit }))
      .then(response => response.json())
      .then(responseJson => responseJson?.data);
  }
}
