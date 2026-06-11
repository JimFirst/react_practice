import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import type { ApiResponse, HttpRequestOptions } from '@/types';

interface HttpInstance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<ApiResponse>;
}

function getHttp(model: string = 'manager'): HttpInstance {
  const http = axios.create({
    baseURL: `/${model}/api/pc`,
    timeout: 60000,
  }) as HttpInstance;

  http.interceptors.response.use(
    (response) => {
      const { data: serverResponse } = response;
      if (!serverResponse) {
        return {
          code: 1,
          message: '服务端返回空数据',
          data: null,
        };
      }
      if (
        typeof serverResponse === 'string' ||
        typeof serverResponse === 'number' ||
        Array.isArray(serverResponse)
      ) {
        return {
          code: 1,
          data: serverResponse,
        };
      }
      return serverResponse;
    },
    (error) => {
      const { status } = error.response as { status?: number };
      if (status === 401) {
        return {
          code: 401,
          message: '登录已过期',
          data: null,
        };
      }
      return Promise.reject(error);
    },
  );

  return http;
}

export { getHttp };
export type { HttpInstance };