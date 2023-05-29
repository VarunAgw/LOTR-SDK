import { BaseApi } from '../baseApi';

export class QuoteeApi extends BaseApi {
  public async getQuotes(page: number = 1): Promise<any> {
    const params = { page: page.toString() };
    const quotes = await this.config.httpClient.get('quote', params);
    return quotes;
  }

  async getQuoteById(quoteId: string): Promise<any> {
    return await this.config.httpClient.get('quote/' + quoteId);
  }

  async getQuotesByMovie(movieId: string): Promise<any> {
    return await this.config.httpClient.get('movie/' + movieId + '/quote');
  }
}
