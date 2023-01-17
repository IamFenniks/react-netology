import React from "react";

const StepsTable = ({ items }) => {
    const tableHeader = [ 'Дата (ДД.ММ.ГГ)', 'Пройдено км', 'Действия' ];

    return (
        <div className="table-wrapper">
            <div className="t-header">
                { tableHeader.map(h => <div key={ h } className="th-column">{ h }</div>) }
            </div>
            
            <div className="t-body">
                {  items.map(i => 
                        <div key={i.id} className="tb-row">
                            <div className="tb-column">{i.date}</div>
                            <div className="tb-column">{i.steps}</div>
                            <div className="tb-column">
                                <a href="">&#x270E;</a>
                                <a href="">&#10008;</a>
                            </div>
                        </div>
                        ) 
                }
            </div>
        </div>
    );
}

export default StepsTable;
