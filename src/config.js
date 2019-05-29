import axios from 'axios'
import { Toast } from 'antd-mobile'

// Intercepting requests
axios.interceptors.request.use(function(config) {
  Toast.loading('加载中', 0)
  return config
})

// Intercept the corresponding
axios.interceptors.response.use(function(config) {
  Toast.hide()
  return config
})
