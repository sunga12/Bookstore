import { useSelector } from 'react-redux';
import Book from './Book';
// import booksSlice from '../redux/books/booksSlice';

function BookList() {
  const {
    booksList,
  } = useSelector((state) => state.books);

  return (
    <>
      {booksList.map((item) => (
        <Book
          key={item.id}
          id={item.id}
          category={item.category}
          title={item.title}
          author={item.author}
          percentage={item.percentage}
          chapter={item.chapter}
        />
      ))}
      <hr />
    </>
  );
}

export default BookList;
