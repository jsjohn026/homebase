import axios from 'axios'
const baseUrl = '/api/orders'

const getAll = () => {
  return axios.get(baseUrl, { withCredentials: true })
}

const create = newObject => {
  return axios.post(baseUrl, newObject, { withCredentials: true })
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject, { withCredentials: true })
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`, { withCredentials: true })
}

export default {
  getAll,
  create,
  update, 
  remove
}