import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  savedNews:[],
}

export const savedNewsSlicer = createSlice({
  name: 'savedNews',
  initialState,
  reducers: {
    ADD_SAVED_NEWS: (state, action) => {
      state.savedNews.push(action.payload);
    },
    SET_SAVED_NEWS: (state, action) => {
      state.savedNews = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { ADD_SAVED_NEWS, SET_SAVED_NEWS } = savedNewsSlicer.actions

export default savedNewsSlicer.reducer