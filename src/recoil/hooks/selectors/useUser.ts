import { useRecoilValue } from 'recoil'
import { userSelector } from 'src/recoil/selectors/userSelector'

export const useUser = () => {
  return useRecoilValue(userSelector)
}
