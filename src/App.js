import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import NavLinks from './components/NavLinks';
import { getBookItems } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBookItems());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <NavLinks />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
