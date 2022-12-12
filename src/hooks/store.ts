import { configureStore } from "@reduxjs/toolkit"
import { modalSlice } from "./modalSlice"
import { editingSlice, userSlice } from "./userSlice"

export const store = configureStore({
reducer: {
    modal: modalSlice.reducer,
    user: userSlice.reducer,
    editing: editingSlice.reducer
},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch