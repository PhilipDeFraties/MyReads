import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom"
import * as BooksAPI from "./BooksAPI"
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const updateBook = (book, shelf) => {
    const update = async () => {
      const response = await BooksAPI.update(book, shelf)
    };

    update();
  };

  useEffect(() => {
    const getBooks = async () => {
      const response = await BooksAPI.getAll();
      setBooks(response)
    };

    getBooks();
  }, [updateBook]);

  return (
    <Routes>
      <Route exact path="/" element={
        <ListBooks books={books} onUpdateBook={updateBook} />
      } />
      <Route path="/search" element={<SearchBooks onUpdateBook={updateBook} books={books} />} />
    </Routes>
  );
};

export default App;
