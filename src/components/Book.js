import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

// genre, title, author,
function Book({
  id, title, author, category, percentage, chapter,
}) {
  const dispatch = useDispatch();

  return (
    <div className="book d-flex justify-content-space-between">
      <div className="book-dets">
        <p className="genre">
          This is the id:
          {id}
        </p>
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
            <button className="remove-btn" type="button" onClick={() => { dispatch(removeBook(id)); }}>Remove</button>
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
  id: '',
  category: '',
  author: '',
  title: '',
  percentage: 1,
  chapter: 1,
};

Book.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  percentage: PropTypes.number,
  chapter: PropTypes.number,
};

export default Book;
