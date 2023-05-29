import { type LotrConfig } from './lotrConfig';
import { MovieApi } from './api/movieApi';
import { HttpClient } from './httpClient';
import { QuoteeApi } from './api/quoteApi';
import { type HttpClientConfig } from './httpClientConfig';

export class Lotr {
  protected BASE_URL: string = 'https://the-one-api.dev/v2/';

  protected config: Readonly<LotrConfig>;

  public movie: Readonly<MovieApi>;
  public quote: Readonly<QuoteeApi>;

  constructor(apiKey: string) {
    const httpClientConfig: HttpClientConfig = {
      baseUri: this.BASE_URL,
      bearerToken: apiKey,
    };
    const httpClient = new HttpClient(httpClientConfig);

    this.config = {
      apiKey,
      httpClient,
    };

    this.movie = new MovieApi(this.config);
    this.quote = new QuoteeApi(this.config);
  }
}
