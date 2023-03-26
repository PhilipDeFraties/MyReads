import { useState } from "react";
import PropTypes from "prop-types";

const Book = ({book, handleUpdateBook}) => {
    const {
        authors,
        imageLinks,
        shelf,
        title
    } = book;
    const [shelfSelect, setShelfSelect] = useState(shelf);

    const onChange = (event) => {
        const value = event.target.value;
        setShelfSelect(value);
        handleUpdateBook(book, value)
    };

    return (
        <li className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            `url("${imageLinks.thumbnail}")`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select value={shelfSelect} onChange={onChange}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {authors.map((author) => (
                    author
                ))}
            </div>
        </li>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateBook: PropTypes.func.isRequired,
}

export default Book;