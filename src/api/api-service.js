import axios from 'axios';

import {FilmsApiService} from "./films-api-service";

export default class ApiService {
    constructor() {
        let baseUrl = 'https://swapi.co/api';

        this.axios = axios.create({
            baseURL: baseUrl
        });

        this.films = new FilmsApiService(this.axios);
    }
}