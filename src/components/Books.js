import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const books = useSelector((storeState) => storeState.books.books);
  const list = books.map((book) => (<li key={book.id}><Book book={book} /></li>));

  return (
    <div>
      <h1>Book List: </h1>
      <ul>{list}</ul>
      <AddBook books={books} />
    </div>
  );
}

export default Books;
