import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'https://students-platform-06.herokuapp.com'
})
