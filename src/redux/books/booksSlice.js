import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksList: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      const newBook = {
        title,
        author,
        genre: 'Action',
        percentage: 1,
        chapter: 34,
      };
      state.booksList = [...state.booksList, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksList = state.booksList.filter((book) => book.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
