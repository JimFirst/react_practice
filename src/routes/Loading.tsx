import { lazy, Suspense, ReactNode } from 'react';
import { Skeleton } from 'antd';

interface LoadingProps {
  children: ReactNode;
}

export default function Loading({ children }: LoadingProps) {
  return <Suspense fallback={<Skeleton active />}>{children}</Suspense>;
}