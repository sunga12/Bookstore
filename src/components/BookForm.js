import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const {
  //   booksList,
  // } = useSelector((state) => state.books);

  function handleClick(e) {
    e.preventDefault();
    dispatch(addBook({ title, author }));
  }

  return (
    <div className="add-book-form">
      <h3>ADD NEW BOOK</h3>
      <form>
        <input
          value={title}
          type="text"
          placeholder="Book Title"
          onChange={(e) => { setTitle(e.target.value); }}
        />
        <input
          value={author}
          type="text"
          placeholder="Author"
          onChange={(e) => { setAuthor(e.target.value); }}
        />
        <button onClick={handleClick} type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
