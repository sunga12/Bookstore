function Book(
  {
    genre, title, author, percentage, chapter,
  },
) {
  return (
    <div className="book d-flex justify-content-space-between">
      <div className="book-dets">
        <p className="genre">
          {genre}
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
  genre: '',
  author: '',
  title: '',
  percentage: 0,
  chapter: 0,
};

Book.propTypes = {
  genre: 'string',
  author: 'string',
  title: 'string',
  percentage: 'number',
  chapter: 'number',
};

export default Book;
