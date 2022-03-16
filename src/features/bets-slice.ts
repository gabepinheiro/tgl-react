import { api } from '@/services/api'
import { AppDispatch, RootState } from '@/store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { clearCart } from './cart-slice'

export type Bet = {
  id: number,
  'choosen_numbers': string
  price: number
  'created_at': string
  type: {
    id: number
    type: string
  }
}

type BetsState = {
  bets: Bet[]
  filteredBets: Bet[] | null
  isFetching: boolean
}

export const fetchBets = createAsyncThunk<
  Bet[]
>(
  'bets/fetchBets',
  async () => {
    try {
      const res = await api.get('/bet/all-bets')
      return res.data
    } catch (error) {
      return error
    }
  },
)

type BetGame = {
  'game_id': number,
  numbers: number[]
}

type NewBet = {
  games: BetGame[]
}

export const newBet = createAsyncThunk<
  boolean,
  NewBet,
  {
    rejectValue: { message: string }
    dispatch: AppDispatch
  }
>(
  'bets/newbet',
  async (newBetData, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.post('/bet/new-bet', newBetData)

      dispatch(clearCart())

      return !!res.data
    } catch (err) {
      const error = err as AxiosError<{ message: string }>
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  },
)

const initialState: BetsState = {
  bets: [],
  filteredBets: null,
  isFetching: true,
}

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    setFilteredBets (state, { payload }: PayloadAction<string>) {
      const filtered = state.bets
        .filter(bet => bet.type.type === payload)
      state.filteredBets = filtered.length === 0 ? null : filtered
    },
  },
  extraReducers (builder) {
    builder
      .addCase(fetchBets.fulfilled, (state, { payload }) => {
        state.bets = payload
        state.isFetching = false
      })
      .addCase(newBet.pending, (state) => {
        state.isFetching = true
      })
      .addCase(newBet.fulfilled, (state, { payload }) => {
        if (payload) {
          toast.success('Aposta realizado com sucesso!')
        }
        state.isFetching = false
      })
      .addCase(newBet.rejected, (state, action) => {
        if (action.payload) {
          toast.error(action.payload)
        } else {
          toast.error(action.error.message)
        }

        state.isFetching = false
      })
  },
})

export const { setFilteredBets } = betsSlice.actions
export const selectBets = (state: RootState) => state.bets
export default betsSlice.reducer
