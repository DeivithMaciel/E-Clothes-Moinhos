import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FoodItem } from '../../pages/Home'

type CartSlice = {
  items: FoodItem[]
  isOpen: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<FoodItem>) => {
      const selecionado = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!selecionado) {
        state.items.push(action.payload)
      } else {
        alert('Prato já selecionado')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
