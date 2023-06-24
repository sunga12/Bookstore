import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBookItems } from '../redux/books/booksSlice';
import Book from './Book';

function BookList() {
  const {
    booksList,
  } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookItems());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {booksList.map((item) => (
        <>
          <Book
            key={item[0].item_id}
            item_id={item.item_id}
            category={item[0].category}
            title={item[0].title}
            author={item[0].author}
            percentage={item[0].percentage}
            chapter={item[0].chapter}
          />
        </>
      ))}
      <hr />
    </>
  );
}

export default BookList;
