import PropTypes from "prop-types";
import BookShelf from "./BookShelf.js"

const ListBooks = ({books}) => {
    const wantToReadbooks = {
        name: "Want To Read",
        books: books.filter(b => b.shelf === "wantToRead")
    }

    const currentlyReadingBooks = {
        name: "Currently Reading",
        books: books.filter(b => b.shelf === "currentlyReading")
    }

    const readBooks = {
        name: "Read",
        books: books.filter(b => b.shelf === "read")
    }

    const sortedBooks = [wantToReadbooks, currentlyReadingBooks, readBooks]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <ol>
                    {sortedBooks.map((shelf) => (
                        <BookShelf 
                            key={shelf.name}
                            name={shelf.name}
                            books={shelf.books}
                        />
                    ))}
                </ol>
            </div>
            <div className="open-search">
                <a>Add a book</a>
            </div>
        </div>
    );
};

ListBooks.propTypes = {
    books: PropTypes.array.isRequired,
};

export default ListBooks;