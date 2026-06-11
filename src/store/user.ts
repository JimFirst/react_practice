import { UserInfo } from '@/types'

export interface UserState {
  permissions: string[]
  userInfo: UserInfo
  login: () => Promise<void>
}

export const createUserSlice = () => ({
  permissions: [] as string[],
  userInfo: {} as UserInfo,
  login: async () => {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  },
})

export type UserStore = UserState
