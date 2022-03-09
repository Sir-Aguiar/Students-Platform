import axios from 'axios'

export const baseApi = axios.create({
  baseURL: 'https://user-registration-06.herokuapp.com'
})