import type { ApiRequestOptions } from './ApiRequestOptions';

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

type Config = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
}

export const OpenAPI: Config = {
  BASE: 'http://185.105.239.77:90',
  VERSION: '1.0.0',
  WITH_CREDENTIALS: false,
  TOKEN: undefined,
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: undefined,
};
