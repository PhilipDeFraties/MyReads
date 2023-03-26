import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI"
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const updateBook = (book, shelf) => {
    const update = async () => {
      const response = await BooksAPI.update(book, shelf)
      console.log(response)
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
    <div className="app">
      {showSearchPage ? (
        <SearchBooks onUpdateBook={updateBook} books={books}/>
      ) : (
        <ListBooks books={books} onUpdateBook={updateBook}/>
      )}
    </div>
  );
};

export default App;
