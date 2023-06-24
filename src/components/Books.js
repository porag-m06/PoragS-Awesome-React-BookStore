import React, { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const [books, setBooks] = useState([
    {
      id: 1,
      category: 'Romance',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 2,
      category: 'Thriller',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      id: 3,
      category: 'Action',
      title: '1984',
      author: 'George Orwell',
    },
  ]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  const list = books.map((book) => (<li key={book.id}><Book book={book} /></li>));

  return (
    <div>
      <h1>Book List: </h1>
      <ul>{list}</ul>
      <AddBook books={books} onAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
