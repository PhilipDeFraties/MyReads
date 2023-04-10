import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

const ListBooks = ({books, onUpdateBook}) => {
    const wantToReadbooks = {
        name: "Want To Read",
        books: books.filter(b => b.shelf === "wantToRead")
    };

    const currentlyReadingBooks = {
        name: "Currently Reading",
        books: books.filter(b => b.shelf === "currentlyReading")
    };

    const readBooks = {
        name: "Read",
        books: books.filter(b => b.shelf === "read")
    };

    const sortedBooks = [wantToReadbooks, currentlyReadingBooks, readBooks];

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                    {sortedBooks.map((shelf) => (
                        <BookShelf 
                            key={shelf.name}
                            name={shelf.name}
                            books={shelf.books}
                            handleUpdateBook={onUpdateBook}
                        />
                    ))}
            </div>
            <div className="open-search">
                <Link className="open-search" to="/search">
                    Add a book
                </Link>
            </div>
        </div>
    );
};

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
};

export default ListBooks;