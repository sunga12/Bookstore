import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const {
    booksList,
  } = useSelector((state) => state.books);

  if (!Array.isArray(booksList)) {
    console.log('booklist is not an array');
    return null; // or return an appropriate JSX if the data is not available yet
  }

  return (
    <>
      {booksList.map((item) => (
        // console.log()
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
