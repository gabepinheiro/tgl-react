import { api } from '@/services/api'
import { RootState } from '@/store'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

export type Game = {
  id: number
  type: string
  description: string
  range: number
  price: number
  'max_number': number
  color: string
}

export type Games = {
  minCartValue: number
  types: (Game & { selected: boolean })[]
}

export type SelectedGame = {
  selectedGame: Game | null
}

type GamesState =
  Games &
  SelectedGame &
  { isLoading: boolean }

export const fetchGames = createAsyncThunk(
  'games/fetcher',
  async () => {
    const res = await api.get('/cart_games')
    return res.data
  },
)

const initialState: GamesState = {
  minCartValue: 0,
  types: [],
  isLoading: true,
  selectedGame: null,
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    selectGame (state, action: PayloadAction<number>) {
      const typeId = action.payload
      const game = state.types.find(type => type.id === typeId)
      if (game) {
        game.selected = true
        state.selectedGame = game
        state.types = state.types.map(game => ({
          ...game,
          selected: game.id === typeId,
        }))
      }
    },
  },
  extraReducers: {
    [fetchGames.fulfilled.type]: (state, action) => {
      state.minCartValue = action.payload.min_cart_value
      state.types = action
        .payload
        .types
        .map((type: Game) => ({ ...type, selected: false }))

      state.types[0].selected = true
      state.selectedGame = state.types[0]

      state.isLoading = false
    },
  },
})

export const { selectGame } = gamesSlice.actions
export const selectGames = (state: RootState) => state.games
export default gamesSlice.reducer
