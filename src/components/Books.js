import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { fetchBooks } from '../redux/features/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBooks()); }, [dispatch, fetchBooks]);

  const { books, isLoading, error } = useSelector((storeState) => storeState.books);
  const bookList = Object.keys(books).map((key) => books[key][0]);
  console.log('the book list: ', bookList);
  // const list = Object.keys(books).map(
  //   (key) => (
  //     <li key={key}>
  //       <Book book={books[key][0]} />
  //       {' '}
  //     </li>
  //   ),
  // );

  const list = bookList.map((book) => (<li key={book.id}><Book book={book} /></li>));
  // const list = bookList.map((book) => (<li key={book.id}><Book book={book} /></li>));

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
      <AddBook books={books} />
    </div>
  );
}

export default Books;
