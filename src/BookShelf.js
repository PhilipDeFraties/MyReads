import PropTypes from "prop-types";
import Book from "./Book";

const BookShelf = ({name, books, handleUpdateBook}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book 
                            key={book.title} 
                            book={book} 
                            handleUpdateBook={handleUpdateBook}
                        />
                    ))}
                </ol>
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    handleUpdateBook: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default BookShelf;