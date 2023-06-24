import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBookItems, postBook } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  async function handleClick(e) {
    e.preventDefault();
    await dispatch(postBook({ title, author }));
    await dispatch(getBookItems());
    setTitle('');
    setAuthor('');
  }

  return (
    <div className="add-book-form">
      <h3 className="add-new-book">ADD NEW BOOK</h3>
      <form>
        <input
          className="new-book-title"
          value={title}
          type="text"
          placeholder="Book Title"
          onChange={(e) => { setTitle(e.target.value); }}
        />
        <input
          className="new-book-author"
          value={author}
          type="text"
          placeholder="Author"
          onChange={(e) => { setAuthor(e.target.value); }}
        />
        <button className="add-btn" onClick={handleClick} type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default BookForm;
