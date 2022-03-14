import { api } from '@/services/api'
import { RootState } from '@/store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Bet = {
  id: number,
  'choosen_numbers': string
  price: number,
  'created_at': string,
  type: {
    id: number,
    type: string
  }
}

type BetsAuth = {
  bets: Bet[]
  isFetching: boolean
  filteredGame: Bet[]
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

const initialState: BetsAuth = {
  bets: [],
  isFetching: true,
  filteredGame: [],
}

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    setFilteredGame (state, { payload }: PayloadAction<string>) {
      state.filteredGame = state.bets?.filter(bet => bet.type.type === payload)
    },
  },
  extraReducers (builder) {
    builder.addCase(fetchBets.fulfilled, (state, { payload }) => {
      state.bets = payload
      state.isFetching = false
    })
  },
})

export const { setFilteredGame } = betsSlice.actions
export const selectBets = (state: RootState) => state.bets
export default betsSlice.reducer
