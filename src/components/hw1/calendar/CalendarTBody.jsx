import React from 'react';
import moment from 'moment';

const startOfMonth = moment().startOf('month');
const startDayOfWM = moment().startOf('month').startOf('week');    // Начала недли в начале месяца
const endDayOfWM = moment().endOf('month').endOf('week');          // Конец недли в конце месяца

const calendar = [];                                               // Создаём масив 
const day = startDayOfWM.clone(); // 28

while(!day.isAfter(endDayOfWM)) {
    calendar.push(day.clone());
    day.add(1, 'day');
}

const dayBefore = moment().subtract(1, 'day');

console.log(dayBefore);

const CalendarTBody = ({selectDate}) => {
    
    return (
        <div className="tbody">
             { calendar.map(c => {
                return (
                    calendar <= startOfMonth &&
                    <button key={c} className="ui-datepicker-week-end">{c.format('D')}</button> 
                )
            }) }
        </div>
    );
}

export default CalendarTBody;