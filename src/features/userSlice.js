import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email:"",
    name:"",
    username:"",
    id:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loggedin (state,action) {
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.name = action.payload.name;
            state.id = action.payload.id;
        }
    }
});


export const {loggedin} = userSlice.actions;
export default userSlice.reducer;