import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const myAppUniqueId = 'LavzmLGiRIX1hajxef11';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${myAppUniqueId}/books/`;

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (name, thunkAPI) => {
    try {
      const response = await axios.get(baseURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong...!!!');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      await axios.post(baseURL, book);
      const response = await thunkAPI.dispatch(fetchBooks());
      return response.payload;
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong...!!!');
    }
  },
);

const initialState = {
  books: {},
  isLoading: false,
  error: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload);
      if (index !== -1) {
        state.books.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books = action.payload;
    });
  },
});

export const { removeBook } = booksSlice.actions;
export default booksSlice.reducer;
