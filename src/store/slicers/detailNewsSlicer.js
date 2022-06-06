import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  detailNews:null,
}

export const detailNewsSlicer = createSlice({
  name: 'detailNews',
  initialState,
  reducers: {
    SET_DETAIL_NEWS: (state, action) => {
      state.detailNews = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_DETAIL_NEWS } = detailNewsSlicer.actions

export default detailNewsSlicer.reducer