import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/features/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <>
      <h5>{book.category}</h5>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <button type="button" onClick={() => { dispatch(removeBook(book.id)); }}>Delete</button>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
