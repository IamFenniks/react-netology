import React, { useState } from "react";
import Clock from "./watches-inner/Clock";
import Form from "./watches-inner/Form";

const Watches = () => {
  const formData = {'nameLabel': 'Название столицы', 'zoneLabel': 'Временная зона', 'btnName': 'Добавить'};

  const [clockData, setClockData] = useState([]);

  const handleAddData = data =>
    data.id &&
    setClockData(prevClockData => [...prevClockData, data]);

  
  const handleRemove = id =>
    setClockData(prevClockData => prevClockData.filter(o => o.id !== id));
  return (
      <div className="m-content">
        <div className="clearfix world-watches">
          <h2>Мировое время</h2>
          <Form className="ww-controlPanel" formData={formData} addData={handleAddData} />

          <div className="ww-demoList">
            { clockData.map(data =>
              <Clock key={data.id} id={data.id} title={data.name} dateDiff={data.tZone} deleteData={handleRemove} />
              ) }
          </div>
        </div>  
      </div>
    );
}

export default Watches;
