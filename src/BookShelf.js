const BookShelf = ({name, books}) => {
    console.log(books)
    console.log(name)
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                Map over books
            </div>
        </div>
    )
}

export default BookShelf;