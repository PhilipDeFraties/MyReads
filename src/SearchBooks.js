import { useState } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI"
import Book from "./Book";

const SearchBooks = ({onUpdateBook, books}) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const closeSearch = () => {
        console.log("Close search link clicked")
    };

    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setQuery(searchTerm);
        searchBooks(searchTerm);
    };

    const searchBooks = async (query) => {
        let results = await BooksAPI.search(query);

        if (results.length > 1) {
            results.map((result) => {
                const existingBook = books.find((book) => book.id === result.id)
                result.shelf = existingBook?.shelf
            });
        };

        setSearchResults(results);
    };

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <a
                    className="close-search"
                    onClick={() => closeSearch()}
                >
                    Close
                </a>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchResults.length > 0 && searchResults.map((book) => (
                        <Book
                            key={book.title}
                            book={book}
                            handleUpdateBook={onUpdateBook}
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
};

SearchBooks.propTypes = {
    onUpdateBook: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchBooks;