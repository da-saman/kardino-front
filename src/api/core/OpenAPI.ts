/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
    BASE: 'https://nklxqf2el0.execute-api.eu-central-1.amazonaws.com',
    VERSION: '1.0.0',
    WITH_CREDENTIALS: false,
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
};