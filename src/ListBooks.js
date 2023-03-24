import PropTypes from "prop-types";
const ListBooks = ({books}) => {
    const sortBooks = (books) => {
        let sortedBooks = {};
        books.forEach((book) => {
            if (booksObj[book.shelf]) {
                booksObj[book.shelf].push(book)
             } else {
                booksObj[book.shelf] = [book]
             };
        });
        return sortedBooks;
    };

    const booksByStatus = sortBooks(books);

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                </div>
            </div>
            <div className="open-search">
                <a>Add a book</a>
            </div>
        </div>
    );
};

ListBooks.PropTypes = {
    books: PropTypes.array.isRequired,
};

export default ListBooks;