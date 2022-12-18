import React from 'react';
import { 
        getDayOfMonth, 
        getMonthDate, 
        getReadableMonthDate, 
        getReadableWeekday, 
        getYear 
    } from '../../../utils/moment-utils';

const CalendarMatHeader = ({selectDate}) => {
    return (
        <div>
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{getReadableWeekday(selectDate)}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{getDayOfMonth(selectDate)}</div>
                    <div className="ui-datepicker-material-month">{getReadableMonthDate(selectDate)}</div>
                    <div className="ui-datepicker-material-year">{getYear(selectDate)}</div>
                </div>
            </div>

            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">
                        {getMonthDate(selectDate)}
                    </span>

                    &nbsp;
                    
                    <span className="ui-datepicker-year">
                        {getYear(selectDate)}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CalendarMatHeader;
