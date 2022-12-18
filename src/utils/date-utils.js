import moment from 'moment';

const getFirstWeekdayOfMonth = (month, year) => {  
    return new Date(year, month, 1).getDay()  
}

const getDaysInMonth = (month, year) => {  
    return moment(`${month}-${year}`, 'MM-YYYY').daysInMonth();  
}

export default function getDatesInMonthDisplay(month, year) {  
    const daysInMonth = getDaysInMonth(month, year);  
    const firstWeekday = getFirstWeekdayOfMonth(month, year);  
    const result = [];

    for (let i = 1; i <= daysInMonth; i++) {  
        result.push(  
        moment(`${month}-${i}-${year}`, 'MM-DD-YYYY').toDate()  
        )  
    }

    return result;  
}