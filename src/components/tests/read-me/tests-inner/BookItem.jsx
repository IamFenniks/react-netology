import React from "react";
import PropTypes from "prop-types";
import BookModel from "../ModelBook";


const BookItem = (props) => {
    const {book, onRemove: handleRemove, onDone: handleDone} = props;
    return (
        <li>
            {book.read && '√'} {book.name}
            <button onClick={() => handleDone(book.id)}>Done!</button>
            <button onClick={() => handleRemove(book.id)}>Remove</button>
        </li>
    );
}

BookItem.propTypes = {
    book: PropTypes.instanceOf(BookModel).isRequired,
    onRemove: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired
}

export default BookItem;
