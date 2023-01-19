import React from "react";

const StepsTable = ({ items, onRemove, onEdit }) => {
    const handleDelete = id => { onRemove(id); }
    const handleEdit = id => { onEdit(id) }
    const tableHeader = [ 'Дата (ДД.ММ.ГГ)', 'Пройдено км', 'Действия' ];
// debugger;
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
                                <button onClick={ () => handleEdit(i.id) }>&#x270E;</button>
                                <button onClick={ () => handleDelete(i.id) }>&#10008;</button>
                            </div>
                        </div>
                        ) 
                }
            </div>
        </div>
    );
}


export default StepsTable;
