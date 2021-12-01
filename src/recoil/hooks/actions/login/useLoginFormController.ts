import { useSetRecoilState } from 'recoil'
import { passwordState } from 'src/recoil/atoms/login/passwordState'
import { userIdState } from 'src/recoil/atoms/login/userIdState'

export const useLoginFormController = () => {
  const setUserId = useSetRecoilState(userIdState)
  const setPassword = useSetRecoilState(passwordState)

  return {
    setUserId,
    setPassword,
  }
}
