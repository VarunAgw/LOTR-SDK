import { type HttpClient } from './httpClient';

export interface LotrConfig {
  apiKey: string;
  httpClient: HttpClient;
}
