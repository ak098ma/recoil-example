import { request } from 'src/utils/request'
import type { UserResponse } from 'src/types/UserResponse'

export const getUser = () => {
  return request<UserResponse>('/api/user')
}
