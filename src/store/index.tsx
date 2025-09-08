import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import api from '../services' // importa o api default

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer // <- registra o reducer do RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) // <- adiciona o middleware
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
