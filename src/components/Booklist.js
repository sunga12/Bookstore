import Book from './Book';

function BookList() {
  const book1 = {
    id: 1,
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentage: 64,
    chapter: 17,
  };

  const book2 = {
    id: 2,
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    percentage: 8,
    chapter: 3,
  };

  const book3 = {
    id: 3,
    genre: 'Economy',
    title: 'Capital in The Twenty-First Century',
    author: 'Suzanne Collins',
    percentage: 0,
    chapter: 1,
  };

  return (
    <>
      <Book
        genre={book1.genre}
        title={book1.title}
        author={book1.author}
        percentage={book1.percentage}
        chapter={book1.chapter}
      />
      <Book
        genre={book2.genre}
        title={book2.title}
        author={book2.author}
        percentage={book2.percentage}
        chapter={book2.chapter}
      />
      <Book
        genre={book3.genre}
        title={book3.title}
        author={book3.author}
        percentage={book3.percentage}
        chapter={book3.chapter}
      />
    </>
  );
}

export default BookList;
