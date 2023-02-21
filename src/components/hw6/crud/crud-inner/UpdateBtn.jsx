import React from "react";
import PropTypes from "prop-types";

const UpdateBtn = ({ updateNotes }) => {
    return (
        <div className="update-btn">
            <h2>Заметки</h2>
            <button onClick={updateNotes}>&#8635;</button>
        </div>
    );
}

UpdateBtn.propTypes = {
    updateNotes: PropTypes.func.isRequired
}

export default UpdateBtn;
