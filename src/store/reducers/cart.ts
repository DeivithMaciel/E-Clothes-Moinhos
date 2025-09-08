import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FoodItem } from '../../pages/Home'

type CartSlice = {
  items: FoodItem[]
  isOpen: boolean
  listItems: boolean
  deliveryAside: boolean
  paymentAside: boolean
  confirmAside: boolean
}

const initialState: CartSlice = {
  items: [],
  isOpen: false,
  listItems: true,
  deliveryAside: false,
  paymentAside: false,
  confirmAside: false
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
      state.listItems = true
      state.deliveryAside = false
      state.paymentAside = false
      state.confirmAside = false
    },
    close: (state) => {
      state.isOpen = false
    },
    toDelivery: (state) => {
      state.listItems = false
      state.deliveryAside = true
      state.paymentAside = false
    },
    toPayment: (state) => {
      state.deliveryAside = false
      state.paymentAside = true
    },
    backToCart: (state) => {
      state.listItems = true
      state.deliveryAside = false
    },
    backToDelivery: (state) => {
      state.deliveryAside = true
      state.paymentAside = false
    },
    clearItems: (state) => {
      state.items = []
    },
    concluing: (state) => {
      state.listItems = true
      state.deliveryAside = false
      state.paymentAside = false
      state.confirmAside = false
    }
  }
})

export const {
  add,
  close,
  open,
  remove,
  toDelivery,
  backToCart,
  toPayment,
  backToDelivery,
  clearItems,
  concluing
} = cartSlice.actions
export default cartSlice.reducer
