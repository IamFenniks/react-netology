import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';

import CalendarMatHeader from './CalendarMatHeader';
import CalendarWdHeader  from './CalendarWDHeader';
import CalendarTBody     from './CalendarTBody';

const Calendar = () => {
    const [selectDate, setSelectDate] = useState(moment().toDate());
// console.log(selectDate);
    return(
        <div className="m-content ui-datepicker">
            <CalendarMatHeader selectDate={selectDate} />

            <div className="ui-datepicker-calendar">
                {/* Calendar Weekday Header - дни недели  */}
                 <CalendarWdHeader />                   
                
                {/* Calendar Tabel Body - Таблица календаря */}
                <CalendarTBody />
            </div>
        </div>
    );
}

export default Calendar;