import React from "react";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
    
    let handleSelectFilter = (e) => {
        onSelectFilter(e.currentTarget.value);
        // console.log(e.currentTarget.value)
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
            {/* <button>All</button>
            <button>Websites</button>
            <button>Flayers</button>
            <button>Business Cards</button> */}
        </div>
    )
}

Toolbar.protoTypes = {

}

export default Toolbar;