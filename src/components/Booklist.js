import { useSelector } from 'react-redux';
import Book from './Book';
// import booksSlice from '../redux/books/booksSlice';

function BookList() {
  const {
    booksList,
  } = useSelector((state) => state.books);

  // const book1 = {
  //   id: 1,
  //   category: 'Action',
  //   title: 'The Hunger Games',
  //   author: 'Suzanne Collins',
  //   percentage: 64,
  //   chapter: 17,
  // };

  // const book2 = {
  //   id: 2,
  //   category: 'Science Fiction',
  //   title: 'Dune',
  //   author: 'Frank Herbert',
  //   percentage: 8,
  //   chapter: 3,
  // };

  // const book3 = {
  //   id: 3,
  //   category: 'Economy',
  //   title: 'Capital in The Twenty-First Century',
  //   author: 'Suzanne Collins',
  //   percentage: 0,
  //   chapter: 1,
  // };

  return (
    <>
      {booksList.map((item) => (
        <Book
          key={item.id}
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
