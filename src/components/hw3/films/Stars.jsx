import React from "react";
import PropTypes from 'prop-types';
import Star from "./Star";

// Для учителя: я не смог найти, как проверить является ли count числом.

const Stars = ({ count }) => {
    if (count < 1   || count > 5 ) { // ??????????????????????????????
        return null;
    }
let counts = [];
    for( let i = 1; i <= count; i++ ) {
        counts.push(i);
    }

    return (
        <div className="m-content">
            <ul className="card-body-stars u-clearfix">
                {counts.map( c => <Star key={c} /> )}
            </ul>
        </div>
    )
}

Stars.propTypes = {
    count: PropTypes.number
}

export default Stars;
