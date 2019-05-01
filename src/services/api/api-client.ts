import 'unfetch/polyfill';
import { stringifyQueryParams, IKeyValue } from '../../helpers/url';

export interface IRequestResult<TResult> {
  result: TResult | null;
  error?: any;
}

export interface IApiClient {
  get: <TResult>(path: string, params?: IKeyValue, headers?: IKeyValue) => Promise<IRequestResult<TResult>>;
  post: <TResult>(path: string, body: any, headers?: IKeyValue) => Promise<IRequestResult<TResult>>;
  put: <TResult>(path: string, body: any, headers?: IKeyValue) => Promise<IRequestResult<TResult>>;
  delete: <TResult>(path: string, body: any, headers?: IKeyValue) => Promise<IRequestResult<TResult>>;
}

enum HttpMethod {
  Get = 'GET',
  Put = 'PUT',
  Post = 'POST',
  Delete = 'DELETE'
}

interface IRequestOptions {
  path: string;
  method: HttpMethod;
  body?: BodyInit;
  headers?: IKeyValue;
  params?: IKeyValue;
}

export default class ApiClient implements IApiClient {
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  baseUrl = '';

  getBaseRootPath() {
    return this.baseUrl;
  }

  getCombinedHeaders() {
    return {
      'Content-Type': 'application/json'
    };
  }

  async request<TResult>(options: IRequestOptions): Promise<IRequestResult<TResult>> {
    let fullPath = options.path.includes(this.getBaseRootPath())
      ? options.path
      : `${this.getBaseRootPath()}${options.path}`;

    const params = options.params || {};

    if (params) {
      fullPath += `?${stringifyQueryParams(params)}`;
    }

    const requestResult = {
      result: null,
      error: null
    };

    try {
      const fetchOptions = {
        headers: {
          ...this.getCombinedHeaders(),
          ...options.headers
        },
        method: options.method,
        body: JSON.stringify(options.body)
      };

      const response = await fetch(fullPath, fetchOptions);
      const json = await response.json();

      if (!response.ok) {
        requestResult.error = json;
      } else {
        requestResult.result = json;
      }
    } catch (e) {
      requestResult.error = e;
    }

    return requestResult;
  }

  async get<TResult>(path: string, params?: IKeyValue, headers?: IKeyValue): Promise<IRequestResult<TResult>> {
    return this.request<TResult>({ path, params, headers, method: HttpMethod.Get });
  }

  async post<TResult>(path: string, body: BodyInit, headers?: IKeyValue): Promise<IRequestResult<TResult>> {
    return this.request<TResult>({ path, body, headers, method: HttpMethod.Post });
  }

  async put<TResult>(path: string, body: BodyInit, headers?: IKeyValue): Promise<IRequestResult<TResult>> {
    return this.request<TResult>({ path, body, headers, method: HttpMethod.Put });
  }

  async delete<TResult>(path: string, body: BodyInit, headers?: IKeyValue): Promise<IRequestResult<TResult>> {
    return this.request<TResult>({ path, body, headers, method: HttpMethod.Delete });
  }
}
