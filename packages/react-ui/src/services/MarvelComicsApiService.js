import { isRequired } from '@oliveiras-well/es-shared';
import { PAGE_SIZE, ROOT_MARVEL_API_URL } from '../constants/apiConstants';

const getComicList = ({ page = 0, limit = PAGE_SIZE }) =>
  `${ROOT_MARVEL_API_URL}/comics?limit=${limit}&offset=${page * limit}&apikey=${
    process.env.REACT_APP_API_PUBLIC_KEY
  }`;

const getComicById = ({ id = isRequired('id') }) =>
  `${ROOT_MARVEL_API_URL}/comics/${id}?apikey=${process.env.REACT_APP_API_PUBLIC_KEY}`;

export class MarvelComicsApiService {
  static getPaginated(page, limit) {
    return fetch(getComicList({ page, limit }))
      .then(response => response.json())
      .then(responseJson => responseJson?.data);
  }

  static getById(id) {
    return fetch(getComicById({ id }))
      .then(response => {
        if (!response.ok) {
          // make the promise be rejected if we didn't get a 2xx response
          throw new Error(`${response.status}`);
        }

        return response;
      })
      .then(response => response.json())
      .then(responseJson => responseJson?.data);
  }
}
