import axios from 'axios'

const service = axios.create({
  baseURL: '127.0.0.1:3001',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
