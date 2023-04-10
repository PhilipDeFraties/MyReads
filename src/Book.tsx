import { useEffect, useState } from "react";
import PropTypes from "prop-types";

type BookProps = {
    book: {
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        shelf: string;
        title: string;
    }
    handleUpdateBook: (book: BookProps["book"], shelf: string) => void;
};

const Book = ({
    book, handleUpdateBook
}: BookProps) => {
    const {
        authors,
        imageLinks,
        shelf,
        title
    } = book;

    const [shelfSelect, setShelfSelect] = useState("none");

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setShelfSelect(value);
        handleUpdateBook(book, value);
    };

    useEffect(() => {
        if (shelf) {
            setShelfSelect(shelf);
        };
    }, [shelf]);

    const bookImageUrl = () => {
        if (imageLinks?.thumbnail) {
            return imageLinks.thumbnail;
        } else {
            return "";
        };
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
                            `url("${bookImageUrl()}")`,
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
                {authors && authors.map((author) => (
                    author
                ))}
            </div>
        </li>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handleUpdateBook: PropTypes.func.isRequired,
};

export default Book;