const SearchBooks = () => {
    const closeSearch = () => {
        console.log("Close search link clicked")
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
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>
    );
};

export default SearchBooks;