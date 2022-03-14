import { api } from '@/services/api'
import { RootState } from '@/store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

export type LoginData = {
  email: string
  password: string
}

export type User = {
  id: number
  email: string
  name: string
}

export type ErrorData = {
  message: string
}

export type AuthState = {
  user: User | null
  isFetching: boolean
  isAuthenticated: boolean
  error: ErrorData | null
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
  isFetching: false,
}

export const login = createAsyncThunk<
  User,
  LoginData,
  {
    rejectValue: ErrorData
  }
>(
  'authentication/login',
  async (loginData, { rejectWithValue }) => {
    try {
      const res = await api.post('/login', loginData)
      const authData = res.data.token
      api.defaults.headers.common.Authorization = authData.token
      localStorage.setItem('@tgl/authentication', JSON.stringify(authData))

      return res.data.user
    } catch (err) {
      const error = err as AxiosError<ErrorData>
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  },
)

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setIsFetching (state, { payload }: PayloadAction<boolean>) {
      state.isFetching = payload
    },
    setError (state, { payload }: PayloadAction<ErrorData | null>) {
      state.error = payload
    },
    setIsAuthenticated (state, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload
    },
    logout (state) {
      state.user = null
      state.isAuthenticated = false
      state.isFetching = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isFetching = true
    })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = payload
        state.isAuthenticated = true
      })
      .addCase(login.rejected, (state, action) => {
        if (action.payload) {
          state.error = action.payload
        } else {
          state.error = { message: action.error.message! }
        }
      })
  },
})

export const {
  logout,
  setIsFetching,
  setIsAuthenticated,
  setError,
} = authSlice.actions
export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
