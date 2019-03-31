import axios from 'axios'

const API_HOST = 'http://192.168.1.104'

 class HttpService {
  constructor() {
    axios.defaults.baseURL = API_HOST
  }

  static get(uri, params) {
    return axios.get(uri, {
      params,
    })
  }

  static post(uri, body, config) {
    return axios.post(uri, body, config)
  }

  static put(uri, body, config) {
    return axios.put(uri, body, config)
  }

  static patch(uri, body) {
    return axios.patch(uri, body)
  }

  static delete(uri) {
    return axios.delete(uri)
  }
}

export default new HttpService()
