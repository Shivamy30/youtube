import { createSlice } from "@reduxjs/toolkit";


const querySearch = createSlice({
    name:"querySearch",
    initialState:{
        query:""
    },
    reducers:{
        setSearchQuery:(state, action)=>{
            state.query = action.payload.query;
        }
    }
});

export const {setSearchQuery} = querySearch.actions;
export default querySearch.reducer;