import axios from 'axios'
const _base = '/system'

// 下载导入模板
export function getMarkerTmpl () {
  const baseUrl = _base + '/docs/markerTmpl'
  return axios.get(baseUrl)
}

// 下载文档
export function systemDoc () {
  const baseUrl = _base + '/docs/systemDoc'
  return axios.get(baseUrl)
}

// 登录
export function login (data) {
  const baseUrl = _base + '/login'
  return axios.post(baseUrl, data)
}
