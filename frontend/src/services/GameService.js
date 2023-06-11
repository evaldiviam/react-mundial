import { URL_API_GAMES, HEADERS } from '../constants/http_constants.js';

export default class GameService {

    static getGames() {
        return fetch(URL_API_GAMES)
            .then(res => res.json())
            .catch(error => error);
    }

    static getGameById(id) {
        return fetch(`${URL_API_GAMES}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        console.log(options);
        return fetch(URL_API_GAMES, options)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
                return error
            });
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_GAMES, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_GAMES}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }

}
