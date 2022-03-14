import { configureStore } from '@reduxjs/toolkit'

import gamesReducer from '@/features/games-slice'
import authReducer from '@/features/auth-slice'
import betsReducer from '@/features/bets-slice'

const store = configureStore({
  reducer: {
    games: gamesReducer,
    auth: authReducer,
    bets: betsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
