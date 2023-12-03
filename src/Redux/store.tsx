import { configureStore } from '@reduxjs/toolkit'
import {HeroSectionReducer,ProductReducer} from './Slice'

export const store = configureStore({
  reducer: {
    HeroSection: HeroSectionReducer,
    Product : ProductReducer

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch