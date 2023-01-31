import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
    const handleFilter = evt => {
        const {value} = evt.target;
        props.onFilter(value);
    }

    return (
        <input type="search" value={props.filter} onChange={handleFilter} />
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired
}

export default Filter;