import { create } from 'zustand'
import { useUser } from './user'

const useStore = create()((...a) => ({
  ...useUser(...a),
}))
export default useStore
