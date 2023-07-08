import React, { useState } from 'react';
import '../style/addBook.css';
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
    <div className="add-book">
      <span>ADD NEW BOOK</span>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Book Title"
          className="title"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          className="author"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          className="category"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
        />

        <button type="submit">ADD BOOK</button>

      </form>
    </div>
  );
}

export default AddBook;
