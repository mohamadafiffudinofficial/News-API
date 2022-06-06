import { configureStore } from '@reduxjs/toolkit'
import detailNewsSlicer from './slicers/detailNewsSlicer'
import savedNewsSlicer from './slicers/savedNewsSlicer'


export const store = configureStore({
  reducer: {
    detailNewsSlicer,
    savedNewsSlicer
  },
})