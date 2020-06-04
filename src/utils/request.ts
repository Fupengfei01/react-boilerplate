import axios, { AxiosResponse } from 'axios';

const instance = axios.create();

export interface Response<T = any> {
  code: number;
  message: string;
  data: T;
}

export type RequestResponse = Promise<AxiosResponse<Response | string>>;

instance.interceptors.response.use(function (response: AxiosResponse<Response>): RequestResponse {
  const code = response.data.code;
  const message = response.data.message;
  const data = response.data.data;

  if (code === 0) {
    return Promise.resolve(data);
  }

  return Promise.reject(message);
});

export function post<T>(url: string, data: T): RequestResponse {
  return instance.post(url, data);
}
