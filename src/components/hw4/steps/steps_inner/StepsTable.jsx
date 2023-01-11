import React from "react";

const StepsTable = ({ item }) => {
    

    const date = (item.date).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)

    const tableHeader = [ 'Дата (ДД.ММ.ГГ)', 'Пройдено км', 'Действия' ];

    return (
        <div className="table-wrapper">
            <div className="t-header">
                { tableHeader.map(h => <div key={ h } className="th-column">{ h }</div>) }
            </div>
            
            <div className="t-body">
                <div className="tb-row">
                    <div className="tb-column">{date}</div>
                    <div className="tb-column">{item.steps}</div>
                    <div className="tb-column">
                        <a href="">&#x270E;</a>
                        <a href="">&#10008;</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepsTable;
