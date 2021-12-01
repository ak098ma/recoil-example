import { LoginRequestParams } from 'src/types/LoginRequestParams'
import { request } from 'src/utils/request'

export const login = async (params: LoginRequestParams) => {
  return await request<never>('/api/login', { body: JSON.stringify(params) })
}
