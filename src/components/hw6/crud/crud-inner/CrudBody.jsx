import React from "react";
import PropTypes from "prop-types";

const CrudBody = (props) => {
    const handleDelete = () => {

    }

    return (
        <div className="crud-body preview">
            <button onClick={() => handleDelete(props.noteText.id)}>&#9587;</button>

            <p>{props.noteText.text}</p>
        </div>
    );
}

CrudBody.propTypes = {
    text: PropTypes.string.isRequired,
    id:   PropTypes.string.isRequired,
    deleteItem:   PropTypes.func.isRequired
}

export default CrudBody;
