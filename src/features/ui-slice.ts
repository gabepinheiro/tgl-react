import { RootState } from '@/store'
import { createSlice } from '@reduxjs/toolkit'

type UIState = {
  isCartOpen: boolean
}

const initialState: UIState = {
  isCartOpen: false,
}

const uiSlice = createSlice({
  name: 'ui-slice',
  initialState,
  reducers: {
    toggleCartOpen (state) {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const { toggleCartOpen } = uiSlice.actions
export const selectUi = (state: RootState) => state.ui
export default uiSlice.reducer
