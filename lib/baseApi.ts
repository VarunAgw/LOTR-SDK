import { type LotrConfig } from './lotrConfig';

/**
 * Abstract BaseApi class
 */
export abstract class BaseApi {
  protected config: LotrConfig;

  constructor(config: LotrConfig) {
    this.config = config;
  }
}
