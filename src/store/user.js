export const useUser = set => ({
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
})
