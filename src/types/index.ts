export interface UserInfo {
  id?: string | number;
  name?: string;
  avatar?: string;
  [key: string]: unknown;
}

export interface UserState {
  permissions: string[];
  userInfo: UserInfo;
  login: () => Promise<void>;
}

export interface ApiResponse<T = unknown> {
  code: number;
  message?: string;
  data: T;
}

export interface HttpRequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  data?: Record<string, unknown>;
  [key: string]: unknown;
}

export interface RouteHandle {
  hidden?: boolean;
  label?: string;
  icon?: React.ReactNode;
  authorzation?: string | string[];
  active?: string;
}

export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export interface TooltipLinkProps {
  title: string;
  src?: string;
}