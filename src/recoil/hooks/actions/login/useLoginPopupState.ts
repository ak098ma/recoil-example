import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { loginPopupState } from 'src/recoil/atoms/login/loginPopupState'

export const useLoginPopupController = () => {
  const setLoginPopupState = useSetRecoilState(loginPopupState)

  const open = useCallback(() => setLoginPopupState(true), [setLoginPopupState])
  const close = useCallback(
    () => setLoginPopupState(false),
    [setLoginPopupState]
  )

  return {
    open,
    close,
  }
}
