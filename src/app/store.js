import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice"
import customerReducer from "../features/customerSlice"

export const store = configureStore({
  reducer: {
    reservations: reservationReducer,
    customers: customerReducer
  }
})