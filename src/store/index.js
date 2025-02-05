import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useUser } from './user'

const useStore = create(
  persist(
    set => ({
      ...useUser(set),
    }),
    {
      name: 'namespace',
    },
  ),
)
export default useStore
