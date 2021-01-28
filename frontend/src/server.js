import axios from 'axios'

export const server = axios.create({
  baseURL: 'http://localhost:9090/',
  headers: {
    Authorization: 'Bearer {token}'
  }
})
