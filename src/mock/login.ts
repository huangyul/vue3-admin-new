import { MockMethod } from 'vite-plugin-mock'

const userInfo = {
  admin: {
    username: 'admin',
    id: 1,
    sex: '男',
  },
}

export default [
  {
    url: '/api/login',
    method: 'get',
    response: () => {
      return {
        status: 0,
        msg: '登录成功',
        data: {
          token: 'token',
          ...userInfo.admin,
        },
      }
    },
  },
] as MockMethod[]
