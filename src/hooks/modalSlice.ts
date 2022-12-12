import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: 'modal',
    initialState: { isOpen: false },
    reducers: {
      open(state) {
        state.isOpen = true;
      },
      close(state){
        state.isOpen = false; 
    }
  }})

  export {modalSlice}