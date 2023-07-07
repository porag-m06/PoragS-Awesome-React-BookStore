import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/features/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBooks()); }, [dispatch]);

  const { books, isLoading, error } = useSelector((storeState) => storeState.books);
  const booksAsList = Object.keys(books).map((key) => ({ ...books[key][0], item_id: key }));
  const list = booksAsList.map((book) => (<li key={book.item_id}><Book book={book} /></li>));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Book List: </h1>
      <ul>{list}</ul>
      <AddBook />
    </div>
  );
}

export default Books;
