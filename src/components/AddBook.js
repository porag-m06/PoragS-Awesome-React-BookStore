import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/features/books/booksSlice';

function AddBook() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      item_id: `item${crypto.randomUUID()}`,
      category: bookCategory,
      title: bookTitle,
      author: bookAuthor,
    }));

    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
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

        <input
          type="text"
          placeholder="Category"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
        />

        <button type="submit">ADD BOOK</button>

      </form>
    </div>
  );
}

export default AddBook;
