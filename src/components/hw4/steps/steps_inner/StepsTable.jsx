import React from "react";
import PropTypes from "prop-types";

const StepsTable = ({ items, onRemove, onEdit }) => {
    const handleDelete = date => { onRemove(date); }
    const handleEdit = date => { onEdit(date); }
    const tableHeader = [ 'Дата (ДД.ММ.ГГ)', 'Пройдено км', 'Действия' ];
    
    return (
        <div className="table-wrapper">
            <div className="t-header">
                { tableHeader.map(h => <div key={ h } className="th-column">{ h }</div>) }
            </div>
            
            <div className="t-body">
                {  items.map(i => 
                        <div key={i.id} className="tb-row">
                            <div className="tb-column">{i.date.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</div>
                            <div className="tb-column">{i.dist}</div>
                            <div className="tb-column">
                                <button onClick={ () => handleEdit(i.date) }>&#x270E;</button>
                                <button onClick={ () => handleDelete(i.date) }>&#10008;</button>
                            </div>
                        </div>
                        ) 
                }
            </div>
        </div>
    );
}

StepsTable.propTypes = {
    items: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default StepsTable;
