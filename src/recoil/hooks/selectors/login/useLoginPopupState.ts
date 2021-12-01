import { useRecoilValue } from 'recoil'
import { loginPopupState } from 'src/recoil/atoms/login/loginPopupState'

export const useLoginPopupState = () => {
  return useRecoilValue(loginPopupState)
}
