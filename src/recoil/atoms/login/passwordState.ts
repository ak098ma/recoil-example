import { atom } from 'recoil'

export const passwordState = atom<string | undefined>({
  key: 'atoms/passwordState',
  default: undefined,
})
