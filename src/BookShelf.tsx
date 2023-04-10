import PropTypes from "prop-types";
import Book from "./Book";

type Book = {
    authors: string[];
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    };
    shelf: string;
    title: string;
}

type BookShelfProps = {
    name: string;
    books: Book[];
    handleUpdateBook: (book: Book, shelf: string) => void;
};

const BookShelf = ({
    name,
    books, 
    handleUpdateBook,
}: BookShelfProps) => {
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