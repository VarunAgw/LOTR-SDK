"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lotr = void 0;
const movieApi_1 = require("./api/movieApi");
const httpClient_1 = require("./httpClient");
const quoteApi_1 = require("./api/quoteApi");
class Lotr {
    constructor(apiKey) {
        this.BASE_URL = 'https://the-one-api.dev/v2/';
        const httpClientConfig = {
            baseUri: this.BASE_URL,
            bearerToken: apiKey,
        };
        const httpClient = new httpClient_1.HttpClient(httpClientConfig);
        this.config = {
            apiKey,
            httpClient,
        };
        this.movie = new movieApi_1.MovieApi(this.config);
        this.quote = new quoteApi_1.QuoteeApi(this.config);
    }
}
exports.Lotr = Lotr;
