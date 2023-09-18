import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./slices/userSlice"

// IMPORT SLICE

export const store = configureStore({
  reducer: {
    user: userSlice
    // ADD SLICE
  },
  devTools: process.env.NODE_ENV !== "production" //disable redux extension when in produciton
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
