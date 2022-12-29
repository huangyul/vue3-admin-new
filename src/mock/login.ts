import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        status: 0,
        msg: '登录成功',
      }
    },
  },
] as MockMethod[]
