import { useRecoilValue } from 'recoil'
import { passwordState } from 'src/recoil/atoms/login/passwordState'
import { userIdState } from 'src/recoil/atoms/login/userIdState'

export const useLoginFormValue = () => {
  const userId = useRecoilValue(userIdState)
  const password = useRecoilValue(passwordState)

  return {
    userId,
    password,
  }
}
