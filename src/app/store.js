import { configureStore } from '@reduxjs/toolkit';
import mercatsReducer from '../features/mercatsSlice';

export const store = configureStore({
  reducer: {
    mercats: mercatsReducer,
  },
});
