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
    deleteItemCart (state, { payload }: PayloadAction<string>) {
      if (state.items?.length === 1) {
        state.items = null
        state.totalValue = 0
        return
      }

      const item = state.items?.find(item => item.id === payload)
      if (item) {
        const filteredItems = state.items!.filter(item => item.id !== payload)
        state.totalValue -= item.price
        state.items = filteredItems
      }
    },
  },
})

export const { addItemToCart, deleteItemCart } = cartSlice.actions
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
