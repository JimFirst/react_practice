import { persist } from 'zustand/middleware'

export const useUser = persist(
  set => ({
    permissions: [],
    userInfo: {},
    login: async () => {
      return new Promise(resolve => {
        setTimeout(() => {
          set({ permissions: ['customer'] })
          resolve()
        }, 1000)
      })
    },
  }),
  { name: 'user' },
)
