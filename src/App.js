import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI"
import ListBooks from "./ListBooks";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const updateBook = (book, shelf) => {
    const update = async () => {
      const response = await BooksAPI.update(book, shelf)
      console.log(response)
    }

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
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <ListBooks books={books} onUpdateBook={updateBook}/>
      )}
    </div>
  );
};

export default App;
