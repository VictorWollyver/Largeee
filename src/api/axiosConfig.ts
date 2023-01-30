import axios from "axios";

const api = axios.create({
  baseURL: 'https://api-largeee.vercel.app'
})

export default api