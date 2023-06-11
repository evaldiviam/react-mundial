import {URL_API_TEAMS, HEADERS} from '../constants/http_constants.js';;

export default class TeamService {

    static getTeams() {
        return fetch(URL_API_TEAMS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getTeamById(id) {
        return fetch(`${URL_API_TEAMS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    static new(params) {
        const options = {
            method: 'POST',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_TEAMS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_TEAMS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_TEAMS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }
}