import { httpRequest } from './request';
import type { HttpRequestOptions } from '@/types';

export default {
  login<T = unknown>(params?: HttpRequestOptions) {
    return httpRequest<T>('/baidu', params);
  },
};