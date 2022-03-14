import { RootState } from '@/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  id: string
  'game_id': number
  numbers: number[]
  color: string
  price: number
  type: string
}

export type Cart = {
  items: CartItem[] | null
  totalValue: number
}

const initialState: Cart = {
  items: null,
  totalValue: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart (state, { payload }: PayloadAction<CartItem>) {
      if (state.items === null) {
        state.items = [payload]
        state.totalValue = payload.price
        return
      }
      state.items = [payload, ...state.items]
      state.totalValue += payload.price
    },
    removeItemCart (state, { payload }: PayloadAction<string>) {
      const filteredItems = state.items!.filter(item => item.id !== payload)
      state.items = filteredItems
    },
  },
})

export const { addItemToCart, removeItemCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
