import { URL_API_PLAYERS, HEADERS } from '../constants/http_constants.js';;

export default class PlayerService {

    static getPlayers() {
        return fetch(URL_API_PLAYERS)
            .then(res => res.json())
            .catch(error => error);
    }

    static getPlayerById(id) {
        return fetch(`${URL_API_PLAYERS}/${id}`)
            .then(res => res.json())
            .catch(error => error);
    }

    // static new(params) {
    //     const options = {
    //         method: 'POST',
    //         headers: HEADERS,
    //         body: JSON.stringify(params)
    //     };
    //     alert(options)
    //     return fetch(URL_API_PLAYERS, options)
    //         .then(response => response.json())
    //         .catch(error => error);
    // }

    static new(params, file) {
        const formData = new FormData();
         for (const name in params) {
             formData.append(name, params[name]);
        }
       // formData.append("photo", file);
        // formData.append("name","Cristiano");
        // formData.append("surnames","Ronaldo");
        // formData.append("position","DELANTERO");
        // formData.append("team","63878483782b776b70ee3254");
        formData.append("photo", file);
        // It's not necessary
        //  headers:{'Content-Type': 'multipart/form-data'},
        const options = {
            method: 'POST',
            body: formData
        };
        console.log(options);
        return fetch(URL_API_PLAYERS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static update(params) {
        const options = {
            method: 'PUT',
            headers: HEADERS,
            body: JSON.stringify(params)
        };
        return fetch(URL_API_PLAYERS, options)
            .then(response => response.json())
            .catch(error => error);
    }

    static delete(id) {
        const options = { method: 'DELETE' };
        return fetch(`${URL_API_PLAYERS}/${id}`, options)
            .then(response => response.json())
            .catch(error => error);
    }
}