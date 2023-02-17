import React from "react";
import PropTypes from "prop-types";

const CrudBody = (props) => {
    const {id, text, deleteItem} = props;
    const handleDelete = id => deleteItem(id);

    return (
        <div className="crud-body preview">
            <button onClick={() => handleDelete(id)}>&#9587;</button>

            <p>{text}</p>
        </div>
    );
}

CrudBody.propTypes = {
    text: PropTypes.string.isRequired,
    id:   PropTypes.string.isRequired,
    deleteItem:   PropTypes.func.isRequired
}

export default CrudBody;
