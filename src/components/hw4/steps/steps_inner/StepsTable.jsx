import React from "react";

// const items = [];

const StepsTable = ({ item }) => {
    let items = [];
debugger
    console.log(items)
    const data = {
        id: items.length + 1,
        date: (item.date).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`),
        steps: item.steps
    };

    items.push(data);
// console.log(items);
    const tableHeader = [ 'Дата (ДД.ММ.ГГ)', 'Пройдено км', 'Действия' ];

    return (
        <div className="table-wrapper">
            <div className="t-header">
                { tableHeader.map(h => <div key={ h } className="th-column">{ h }</div>) }
            </div>
            
            <div className="t-body">
                { items.length <= 1 
                    ? <div className="tb-row">
                        <div className="tb-column">{items[0].date}</div>
                        <div className="tb-column">{items[0].steps}</div>
                        <div className="tb-column">
                            <a href="">&#x270E;</a>
                            <a href="">&#10008;</a>
                        </div>
                    </div>
                    : items.map(i => 
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
