import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { userRequestIdState } from '../../atoms/userRequestIdState'

export const useRefreshUser = () => {
  const update = useSetRecoilState(userRequestIdState)

  return useCallback(() => update((n) => n + 1), [update])
}
