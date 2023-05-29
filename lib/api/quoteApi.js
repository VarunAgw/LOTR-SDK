"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteeApi = void 0;
const baseApi_1 = require("../baseApi");
class QuoteeApi extends baseApi_1.BaseApi {
    getQuotes(page = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = { page: page.toString() };
            const quotes = yield this.config.httpClient.get('quote', params);
            return quotes;
        });
    }
    getQuoteById(quoteId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.config.httpClient.get('quote/' + quoteId);
        });
    }
    getQuotesByMovie(movieId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.config.httpClient.get('movie/' + movieId + '/quote');
        });
    }
}
exports.QuoteeApi = QuoteeApi;
