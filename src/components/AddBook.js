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

        {/* <input
          type="text"
          placeholder="Category"
          className="category"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
        /> */}

        <select
          className="category"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          <option value="Action" key="Action">Action</option>
          <option value="Arts" key="Arts">Arts</option>
          <option value="Economy" key="Economy">Economy</option>
          <option value="Geography" key="Geography">Geography</option>
          <option value="History" key="History">History</option>
          <option value="Literature" key="Literature">Literature</option>
          <option value="Mathematics" key="Mathematics">Mathematics</option>
          <option value="Philosophy" key="Philosophy">Philosophy</option>
          <option value="Science Fection" key="Science Fection">Science Fection</option>
          <option value="Religion" key="Religion">Religion</option>
          <option value="Science" key="Science">Science</option>
          <option value="Other" key="Other">Other</option>
        </select>

        <button type="submit">ADD BOOK</button>

      </form>
    </div>
  );
}

export default AddBook;
