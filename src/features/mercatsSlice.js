import { createSlice } from '@reduxjs/toolkit';
import mercatsData from './mercats.json';

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem('mercatsState');
  return serializedState ? JSON.parse(serializedState) : mercatsData;
};

const initialState = {
  mercats: loadFromLocalStorage(),
};

const mercatsSlice = createSlice({
  name: 'mercats',
  initialState,
  reducers: {
    toggleVisited(state, action) {
      const mercat = state.mercats.find((m) => m.id === action.payload);
      if (mercat) {
        mercat.visited = !mercat.visited;
        localStorage.setItem('mercatsState', JSON.stringify(state.mercats));
      }
    },
  },
});

export const { toggleVisited } = mercatsSlice.actions;
export default mercatsSlice.reducer;
