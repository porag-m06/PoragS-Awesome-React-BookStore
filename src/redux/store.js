import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/booksSlice';
import categoriesReducer from './features/categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});
