import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../Entities/User";

interface userPayLoad {
    firstName: string,
    lastName: string,
    emailAddress: string,
    username: string,
    phone: string
}

const initialState = {
    user: <User>{
        name: {
            firstname : '',
            lastname : ''
        },
        email: '',
        id: 0,
        phone: '',
        username: '',
        password: ''
    } 
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      loadSelectedUser(state, action: PayloadAction<User>) {
        state.user = action.payload;
      },
      clearSelectedUser(state){
        state.user = initialState.user;
    }
  }})  

const editingSlice = createSlice({
    name: 'editing',
    initialState: { isEditing: false },
    reducers: {
        setEditing(state) {
            state.isEditing = true
        },
        clearEditing(state) {
            state.isEditing = false
        }
    }
})

  export {userSlice, editingSlice}