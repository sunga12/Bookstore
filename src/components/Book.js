// import { useDispatch } from 'react-redux';

// genre, title, author,
function Book({
  title, author, category, percentage, chapter,
}) {
  // const dispatch = useDispatch();

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
            <button className="remove-btn" type="button">Remove</button>
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
  category: '',
  author: '',
  title: '',
  percentage: 1,
  chapter: 1,
};

Book.propTypes = {
  category: 'string',
  author: 'string',
  title: 'string',
  percentage: 'number',
  chapter: 'number',
};

export default Book;
