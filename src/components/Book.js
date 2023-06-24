/*eslint-disable */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, getBookItems } from '../redux/books/booksSlice';

function Book({
  item_id, title, author, category, percentage, chapter,
}) {
  const dispatch = useDispatch();

  async function handleRemove(e) {
    e.preventDefault();
    try {
      await dispatch(deleteBook(item_id));
      await dispatch(getBookItems());
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="book d-flex justify-content-space-between">
      <div className="book-dets">
        <p className="genre">
          {category}
        </p>
        <p className="title">
          {title}
        </p>
        <p className="author">
          {author}
        </p>
        <ul className="book-options d-flex">
          <li className="option">
            Comments
          </li>
          <li className="option">
            <button className="remove-btn" key={item_id} type="button" onClick={handleRemove}>Remove</button>
          </li>
          <li className="option">
            Edit
          </li>
        </ul>
      </div>
      <div className="status">
        <div className="progress-circle" />
        <p>
          {percentage}
          %
        </p>
        <p>
          Completed
        </p>
      </div>
      <div className="chapter-progress">
        <p className="current-chap">
          CURRENT CHAPTER
        </p>
        <p className="chap-num">
          Chapter
          {chapter}
        </p>
        <button type="button" className="update-prog">
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
}

Book.defaultProps = {
  item_id: '',
  category: '',
  author: '',
  title: '',
  percentage: 1,
  chapter: 1,
};

Book.propTypes = {
  item_id: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  percentage: PropTypes.number,
  chapter: PropTypes.number,
};

export default Book;
