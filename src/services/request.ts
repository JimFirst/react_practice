import type { ApiResponse, HttpRequestOptions } from '@/types';
import { getHttp, HttpInstance } from '@/utils/http';
import { message } from 'antd';

interface HttpRequestResult<T = unknown> {
  code: number;
  message?: string;
  data: T | null;
}

async function httpRequest<T = unknown>(
  url: string,
  options: HttpRequestOptions = {},
  model?: string,
): Promise<HttpRequestResult<T>> {
  try {
    const http: HttpInstance = getHttp(model);
    const res = await http({
      url,
      ...options,
    }) as ApiResponse<T>;

    if (res?.code !== 0) {
      if ([401, 403].includes(res.code)) {
        window.location.href = '/login';
        message.error('登录已超时，请重新登录');
      } else {
        message.error(res.message || '服务无响应');
      }
    }
    return {
      code: res?.code ?? 1,
      message: res?.message,
      data: res?.data ?? null,
    };
  } catch (error) {
    console.error(error);
    const { code, message: errorMsg } = error as { code?: number; message?: string };
    message.error(errorMsg || '服务无响应');
    return {
      code: code || 1,
      message: errorMsg,
      data: null,
    };
  }
}

export { httpRequest };
export type { HttpRequestResult };