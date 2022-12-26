import React from "react";
import PropTypes from 'prop-types';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
    
    let handleSelectFilter = (e) => {
        onSelectFilter(e.currentTarget.value);
    }

    return (
        <div className="toolbar-header">
            {filters.map(filter => 
                filter === selected 
                    ? ( 
                        <button 
                            key={filter}
                            onClick={handleSelectFilter}
                            value={filter}
                            className="active"
                        >
                            {filter}
                        </button>

                    ):(
                        <button 
                            key={filter}
                            onClick={handleSelectFilter}
                            value={filter}
                        >
                            {filter}
                        </button>
                    )
            )}
        </div>
    )
}

Toolbar.protoTypes = {
    onClick:PropTypes.func.isRequired,
    value:PropTypes.string.isRequired,
    key:PropTypes.string.isRequired
}

export default Toolbar;