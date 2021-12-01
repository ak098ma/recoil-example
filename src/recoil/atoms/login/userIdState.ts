import { atom } from 'recoil'

export const userIdState = atom<string | undefined>({
  key: 'atoms/userIdState',
  default: undefined,
})
