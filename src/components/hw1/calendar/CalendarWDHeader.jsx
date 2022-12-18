import React from 'react';

const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const CalendarWdHeader = () => {
    const weekdayIcons = weekdays.map((day, key) => {  
        return (  
            <div key={key}>  
                {day}  
            </div>  
        );  
    }); 
    return (
        <div className="thead">
            {weekdayIcons}
        </div>
    );
}

export default CalendarWdHeader;