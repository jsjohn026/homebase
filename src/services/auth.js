import axios from 'axios'
const baseUrl = '/auth'

const signup = (credentials) => {
  return axios.post(`${baseUrl}/signup`, credentials, { withCredentials: true })
}

const login = (credentials) => {
  return axios.post(`${baseUrl}/login`, credentials, { withCredentials: true })
}

const verify = () => {
  return axios.post(`${baseUrl}/`, {}, { withCredentials: true })
}

export default { signup, login, verify }