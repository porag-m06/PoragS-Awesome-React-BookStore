import React from 'react';
import '../style/book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/features/books/booksSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className="book-detail">
      <h5>{book.category}</h5>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <div className="btn-panel">
        <button type="button" onClick={() => {}}>Comments</button>
        <button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>Remove</button>
        <button type="button" onClick={() => {}}>Edit</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
