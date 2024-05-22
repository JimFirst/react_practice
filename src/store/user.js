import { persist } from 'zustand/middleware'

export const initUser = {
  name: null,
}
export const useUser = persist(
  set => ({
    name: null,
    // 重置token信息
    resetUser: () => {
      set({ ...initUser })
    },
    login: async () => {
      set({ name: '张三' })
    },
  }),
  { name: 'user' },
)
