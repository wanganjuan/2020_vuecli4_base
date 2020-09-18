/* eslint-disable */
import axios from 'axios'
import {Message} from 'element-ui'
export default {
  install (Vue, options) {
    options = options || {}
    // API服务的 baseUR
    axios.defaults.baseURL = `/api/`
		// axios.defaults.baseURL = `http://172.31.148.21:11000/apis/v1/`
		// axios.defaults.baseURL = `http://localhost:11000/apis/v1/`

    // 超时设置
    axios.defaults.timeout = options.timeout || 20000

    // http request 拦截器
    axios.interceptors.request.use(
      config => {
        let Authorization = ''
        if (config.url !== '/system/login') {
          // let _cookies = window.document.cookie
          // if (_cookies && _cookies.split(';')) {
          //   Authorization = (_cookies.split(';').find((item) => {return item.includes('Authorization')})).replace('Authorization=', '')
          // }
          Authorization = window.localStorage.getItem('Authorization')
        }
        config.headers = {
          'Content-Type': 'application/json',
          Authorization
        }
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )

    /**
     * 响应拦截器
     */
    axios.interceptors.response.use(
      (res) => {
        if (res.data && res.data.code === 401) {
          window.location.href = '/login'
          return
        }
        const _res = res.data || {}
        if (_res.code === 200) {
          return res.data || {}
        }
        Message({
          message: _res.msg,
          type: 'error'
        })
        throw _res
      },
      error => {
        Message({
          message: error.toString(),
          type: 'error'
        })
        throw error
      }
    )
  }
}
