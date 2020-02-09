export class FilmsApiService {
    constructor(axios) {
        this.axios = axios;
    }

    getFilms() {
        return this.axios.get('/films');
    }
}
