import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddBook({ books, onAddBook }) {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddBook({
      id: books.length + 1,
      category: 'n/a',
      title: bookTitle,
      author: bookAuthor,
    });
    setBookTitle('');
    setBookAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Book Title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
        />

        <button type="submit">ADD BOOK</button>

      </form>
    </div>
  );
}

AddBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onAddBook: PropTypes.func.isRequired,
};

export default AddBook;
