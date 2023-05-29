import { BaseApi } from '../baseApi';

export class MovieApi extends BaseApi {
  public async getMovies(page: number = 1): Promise<any> {
    const params = { page: page.toString() };
    const movies = await this.config.httpClient.get('movie', params);
    return movies;
  }

  async getMovieById(movieId: string): Promise<any> {
    return await this.config.httpClient.get('movie/' + movieId);
  }
}
