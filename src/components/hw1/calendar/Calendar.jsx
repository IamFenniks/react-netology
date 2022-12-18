import React from "react";
import './../../../App.css';
import moment from 'moment';
import 'moment/locale/ru';

moment.updateLocale('ru', {week: {dow: 1}})                     // Назначаем первым днём недели "Понедельник"

const getDaisInMonth = (month, year) => {
    return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();
}
console.log(getDaisInMonth('02', '2022'));

const getFirstWeekdayOfTheMonth = (month, year) => {
    return moment(
        `${month}-${year}`,
        'MM-YYYY'
    ).startOf('month').weekday();
}
console.log(getFirstWeekdayOfTheMonth('12', '2022'));

const getDaysInMonthDisplay = (month, year) => {
    const dayInMonth = getDaisInMonth(month, year);
    const firstWeekday = getFirstWeekdayOfTheMonth(month, year);
    const result = [];

    for(let i; i <= dayInMonth; i++) {
        result.push(
            moment({month}-{year}, 'MM-DD-YYYY').toDate()
        )
    }
    return result;
}
console.log(getDaysInMonthDisplay(7, 2020));














// const startDayOfWM = moment().startOf('month').startOf('week');    // Начала недли в начале месяца
// const endDayOfWM = moment().endOf('month').endOf('week');          // Конец недли в конце месяца

// const calendar = [];                                             // Создаём масив 
// const day = startDayOfWM.clone(); // 28

// while(!day.isAfter(endDayOfWM)) {
//     calendar.push(day.clone()); //.format('D')
//     day.add(1, 'day');
// }

//console.log(startDayOfWM.format('DD')); // 28
// window.moment = moment;
// window.day = day;

const Calendar = (props) => {
    let date = props.date;
    moment.locale('ru');
    //console.log(date.format('dddd, MMMM DD YYYY, h:mm:ss'));
    let newStateOfMonth = date.format('MMMM').substring(0, date.format('MMMM').length-1) + "я"
    
    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{date.format('dddd').charAt(0).toUpperCase() + (date.format('dddd').slice(1))}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.format('DD')}</div>
                    <div className="ui-datepicker-material-month">{newStateOfMonth}</div>
                    <div className="ui-datepicker-material-year">{date.format('YYYY')}</div>
                </div>
            </div>

            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">
                        {date.format('MMMM').charAt(0).toUpperCase() + (date.format('MMMM').slice(1))}
                    </span>
                    &nbsp;
                    <span className="ui-datepicker-year">
                        {date.format('YYYY')}
                    </span>
                </div>
            </div>
            
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="ui-datepicker-week-end" />
                    <col className="ui-datepicker-week-end" />
                </colgroup>
                <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="ui-datepicker-other-month">27</td>
                        <td className="ui-datepicker-other-month">28</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>7</td>
                        <td className="ui-datepicker-today">8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    {/* <!-- остальные недели --> */}
                </tbody>
            </table>
            
            {/* { calendar.map(c => {
                return (
                    c === moment().endOf("week") 
                        ? <button key={c} className="ui-datepicker-week-end">{c.format('D')}</button>
                        : <button key={c} className="">{c.format('D')}</button>
                )
            }) } */}
        </div>
    )
}

export default Calendar;