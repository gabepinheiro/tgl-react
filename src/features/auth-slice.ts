import { api } from '@/services/api'
import { RootState } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type LoginData = {
  email: string
  password: string
}

export type User = {
  id: number
  email: string
  name: string
}

export type AuthState = {
  user: User | null
  isFetching: boolean
  isAuthenticated: boolean
  error: { message: string } | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
  isFetching: false,

}

export const login = createAsyncThunk(
  'authentication/login',
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const res = await api.post('/login', loginData)
      const token = res.data.token
      api.defaults.headers.common.Authorization = token.token
      localStorage.setItem('@tgl/authentication', JSON.stringify(token))

      return res.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data)
      }
      return rejectWithValue(error)
    }
  },
)

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending.type]: (state) => {
      state.isFetching = true
    },
    [login.fulfilled.type]: (state, action) => {
      const { user } = action.payload
      const { id, email, name } = user
      state.user = { id, email, name }
      state.isAuthenticated = true
      state.isFetching = false
      state.error = null
    },
    [login.rejected.type]: (state, action) => {
      state.error = action.payload
      state.isFetching = false
    },
  },
})

export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
