import { createSlice } from "@reduxjs/toolkit";
 


export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
       contactsFilterAction: (state, { payload }) => {
           return state = payload;
        },
    }
})


export const { contactsFilterAction } = filterSlice.actions;
export const contactsFilter = filterSlice.reducer;