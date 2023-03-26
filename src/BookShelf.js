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

export default BookShelf;