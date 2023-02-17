import React from "react";
import PropTypes from "prop-types";

const UpdateBtn = (props) => {
    return (
        <div className="update-btn">
            <h2>Заметки</h2>
            <button>&#8635;</button>
        </div>
    );
}

UpdateBtn.propTypes = {
    // className: PropTypes.string,
    // name: PropTypes.string,
    // tZone: PropTypes.string,
    // id:   PropTypes.string.isRequired,
    // deleteData:   PropTypes.func.isRequired
}

export default UpdateBtn;
