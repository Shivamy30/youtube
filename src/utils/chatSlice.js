import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addMessage: (state, action)=>{
            state.messages = state.messages.slice(0,20);
            state.messages.unshift(action.payload);
        }
    }
});

export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;