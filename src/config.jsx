import axios from 'axios' // Promise based HTTP client for the browser and node.js
import { Toast } from 'antd-mobile'

/* Intercept request */
axios.interceptors.request.use(function (config) {
  Toast.loading('加载中', 0)
  return config
})

/* Intercept communication */
axios.interceptors.response.use(function (config) {
  setTimeout(() => {
    Toast.hide()
  }, 1000)
  return config
})
