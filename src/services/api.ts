import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const getAuthTokenLocalStorage = (): unknown => {
  const storage = localStorage.getItem('@tgl/authentication')
  if (storage) {
    return JSON.parse(storage)
  }

  return null
}

api.interceptors.request.use(config => {
  const auth = getAuthTokenLocalStorage() as {token: string}
  if (!auth) {
    return config
  }

  if (config.headers) {
    config.headers.Authorization = `Bearer ${auth.token}`
  }

  return config
})

export { api }
