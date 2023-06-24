import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <>
      <h5>{book.category}</h5>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <button type="button">Delete</button>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
