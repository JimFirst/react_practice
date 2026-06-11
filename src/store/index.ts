import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createUserSlice } from './user'
import type { UserState } from './user'

type StoreState = UserState
type Store = ReturnType<typeof createStore>

function createStore() {
  return create<StoreState>()(
    persist(
      set => ({
        ...createUserSlice(),
      }),
      {
        name: 'namespace',
        storage: createJSONStorage(() => localStorage),
      },
    ),
  )
}

const useStore = createStore()

export default useStore
export type { Store }
