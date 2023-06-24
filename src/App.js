import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import NavLinks from './components/NavLinks';
// import { getBookItems } from './redux/books/booksSlice';

function App() {
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
