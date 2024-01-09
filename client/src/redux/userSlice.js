import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 currentUser: null,
 error: null,
 loading: false,
};

const userSlices = createSlice({
    name: 'user', 
    initialState, 
    
})
