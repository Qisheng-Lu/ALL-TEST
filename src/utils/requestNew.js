import axios from 'axios'
import {
  Message
} from 'element-ui'
import {
  getToken
} from '@/utils/auth'

let basicUrl = process.env.NODE_ENV === 'development' ? 'https://test.snowlink.cn' : ''

const service = axios.create({
  baseURL: basicUrl,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    config.headers['TOKEN'] = getToken()
    config.headers['SYSTEMCODE'] = 'PCCONS'
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    if (response.data.success !== undefined) {
      if (!response.data.success) {
        Message({
          message: response.data.message,
          type: 'error',
          duration: 2 * 1000
        })
        return Promise.reject(response.data.message)
      }
    }
    return response
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
