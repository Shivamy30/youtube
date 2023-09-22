import { createSlice } from "@reduxjs/toolkit";


const videosSlice = createSlice({
    name: "videos",
    initialState:{
        videos:[],
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videos =action.payload;
        }
    }
});

export const {addVideos} = videosSlice.actions

export default videosSlice.reducer;