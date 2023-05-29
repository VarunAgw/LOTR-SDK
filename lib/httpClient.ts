import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios';

import { type HttpClientConfig } from './httpClientConfig';

export class HttpClient {
  protected axios: AxiosInstance;

  constructor(config: HttpClientConfig) {
    const params: CreateAxiosDefaults & { headers: Record<string, string> } = {
      baseURL: config.baseUri,
      timeout: 1000,
      headers: {},
    };

    if (config.bearerToken !== undefined) {
      params.headers.Authorization = 'Bearer ' + config.bearerToken;
    }

    this.axios = axios.create(params);
  }

  async get(path: string, params?: Record<string, string>): Promise<any> {
    const response = await this.axios.get(
      path + '?' + new URLSearchParams(params).toString()
    );
    return response.data;
  }
}
