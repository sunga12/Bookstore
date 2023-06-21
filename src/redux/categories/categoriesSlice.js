import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesList: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.categoriesList = 'Under Construction';
    },
  },
});

export const { setStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
