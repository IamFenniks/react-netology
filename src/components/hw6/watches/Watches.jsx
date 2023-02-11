import React from "react";
import Form from "./watches-form/Form";

const Watches = () => {
  const formData = {'nameLabel': 'Название столицы', 'zoneLabel': 'Временная зона', 'btnName': 'Добавить'};
    return (
        <div className="m-content">
          <div className="clearfix world-watches">
            <h2>Мировое время</h2>

            <Form className="ww-controlPanel" formData={formData} />

            <div className="ww-demoList">
              
            </div>
          </div>  
        </div>
      );
}

export default Watches;
