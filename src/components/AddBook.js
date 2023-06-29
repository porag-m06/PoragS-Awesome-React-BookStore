import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/features/books/booksSlice';

function AddBook({ books }) {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      id: `item${books.length + 1}`,
      category: 'n/a',
      title: bookTitle,
      author: bookAuthor,
    }));

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
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AddBook;
