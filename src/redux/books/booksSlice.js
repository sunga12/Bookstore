import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  booksList: [],
  isLoading: false,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ENfILofDRr0lFes8m9WT/books';
export const getBookItems = createAsyncThunk('books/getBookItems', async () => {
  let response = []; // Declare response as an empty array initially

  try {
    const resp = await axios(url);
    response = Object.entries(resp.data).map(([key, value]) => ({ item_id: key, ...value }));
    return response;
  } catch (error) {
    return error;
  }
});

const addBookurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ENfILofDRr0lFes8m9WT/books';
export const postBook = createAsyncThunk('books/postBookItems', async ({ title, author }) => {
  const newBook = {
    item_id: uuidv4(),
    title,
    author,
    category: 'Fiction',
    percentage: 1,
    chapter: 34,
  };
  try {
    const resp = await axios.post(addBookurl, newBook);
    return resp.data;
  } catch (error) {
    return error;
  }
});

const deleteBookurl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ENfILofDRr0lFes8m9WT/books';
export const deleteBook = createAsyncThunk('books/deleteBookItems', async (bookId) => {
  try {
    const resp = await axios.delete(`${deleteBookurl}/${bookId}`);
    return resp.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      const newBook = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Fiction',
        percentage: 1,
        chapter: 34,
      };
      state.booksList = [...state.booksList, newBook];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksList = state.booksList.filter((book) => book.item_id !== bookId);
    },
  },
  extraReducers: {
    [getBookItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksList = action.payload;
    },
    [getBookItems.rejected]: (state) => {
      state.isLoading = false;
    },
    [postBook.pending]: (state) => {
      state.isLoading = true;
    },
    [postBook.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [postBook.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteBook.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteBook.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [deleteBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
