import { Skeleton } from 'antd-mobile'
import { Suspense } from 'react'

export default function Loading({ children }) {
  return <Suspense fallback={<Skeleton active />}>{children}</Suspense>
}
