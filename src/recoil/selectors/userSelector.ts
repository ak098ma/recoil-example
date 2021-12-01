import { selector } from 'recoil'
import { getUser } from 'src/apis/getUser'
import { userRequestIdState } from '../atoms/userRequestIdState'

export const userSelector = selector({
  key: 'selectors/userSelector',
  get: async ({ get }) => {
    get(userRequestIdState)
    return await getUser()
  },
})
