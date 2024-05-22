import { create } from 'zustand'
import { useUser } from './user'

export const useStore = create()((...a) => ({
  ...useUser(...a),
}))
