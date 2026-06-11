import useStore from '@/store';

type Authorization = string | string[] | undefined;

export function usePermission(authorization?: Authorization): boolean {
  if (!authorization) return true;
  const { permissions } = useStore();
  if (Array.isArray(authorization)) {
    return permissions.some((code) => authorization.includes(code));
  }
  return permissions?.includes(authorization);
}